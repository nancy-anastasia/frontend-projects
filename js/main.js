// Global variables
var xmlData; // Text data retrieved from the XML file
var titles; // All titles from the XML file
var textDropdown; // A dropdown where the text is chosen
var swedishOptions; // Texts in Swedish in the dropdown
var englishOptions; // Texts in English in the dropdown
var chosenTextTitle; // The title of the text option chosen from the dropdown
var chosenTextAuthor; // Chosen text's author
var chosenText; // The chosen text itself
var playButton; // The play button
var stopButton; // The stop button
var ignoreCasingCheckbox; // The checkbox to ignore casing when typing
var casingIsChecked = true; // The casing is checked by default
var textArray; // A variable for an empty array container for the text characters saved as <span> elements
var textSpans; // Span elements of characters outputted on the page
var inputtedValue; // The value that a user type in the input field
var typeCount; // How many times a user has typed in the field
var typedChars; // A variable for an empty array container for typed characters
var correctlyTypedChars; // A variable for an empty array container for correctly typed characters
var grossWMP; // How many words were typed by the user in total per minute
var netWPM; // // How many words were typed per minute correctly per minute
var accuracyRate; // What percent of characters was typed correctly
var errorCount; // How many errors the user made while typing
var startTime; // A start time for a timer
var grossWmpElem; // An element for outputting Gross WMP
var netWmpElem; // An element for outputting Net WMP
var accuracyElem; // An element for outputting the accuracy percentage
var errorsElem; // An element for outputting the number of errors

// End of global variables
// --------------------------------------------------

// Initialize global variables and event handlers
function init() {
  // References to the text options
  swedishOptions = document.getElementById("chosen-text-title").getElementsByClassName("swedish");
  englishOptions = document.getElementById("chosen-text-title").getElementsByClassName("english");

  // Get data from the xml file ("xmlFile") and an array of titles ("titles")
  fetchData();

  // Make an initial span array of text characters with the default text
  chosenText = document.getElementById("display-chosen-text").innerText;
  makeTextSpanArray();
  // Output the default text consisting of span elements on the page
  let textSpanString = textArray.join("");
  document.getElementById("display-chosen-text").innerHTML = textSpanString;

  // Add event listener to the Ignore Casing checkbox
  ignoreCasingCheckbox = document.getElementById("ignore-casing");
  ignoreCasingCheckbox.addEventListener("change", handleCasingCheckChange);

  // Add an event listener to the dropdown
  textDropdown = document.getElementById("chosen-text-title");
  textDropdown.addEventListener("change", handleTextTitleChange);

  // Add an event listener to language selection
  document.querySelectorAll('input[name="language"]').forEach(function (radio) {
    radio.addEventListener("change", handleLanguageChange);
  });

  // Add event listeners to play and stop buttons
  playButton = document.getElementById("play-button");
  playButton.addEventListener("click", startGame);
  stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", stopGame);

  // Add event listeners to the text input field
  let textInput = document.getElementById("text-input-field");
  // When the input is clicked
  textInput.addEventListener("focus", function () {
    // Clear the placeholder text
    textInput.placeholder = "";
  });
  // When a user clicks outside the input field
  textInput.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      // If a user is not typing and the input field is empty, restore the placeholder text
      textInput.placeholder = "Type here...";
    }
  });
  // Save references to the elements outputting statistics
  grossWmpElem = document.getElementById("gross-wmp");
  netWmpElem = document.getElementById("net-wmp");
  accuracyElem = document.getElementById("accuracy");
  errorsElem = document.getElementById("errors");
}

// End of the init() function
// Add event listener for the load event
window.addEventListener("load", init);
// --------------------------------------------------

// Fetch data from the XML file
function fetchData() {
  // Retreive the XML file
  fetch("http://127.0.0.1:5500/texts.xml")
    .then((response) => {
      // If there is no response from the server
      if (!response.ok) {
        throw new Error("No response from the server");
      }
      // Get the response text
      return response.text();
    })
    .then((str) => {
      // Parse the text data and titles from XML file
      const parser = new DOMParser();
      xmlData = parser.parseFromString(str, "text/xml");
      titles = xmlData.getElementsByTagName("title");
      // Continue working with the parsed file
    })
    // Catch an eventual error with the fetch operation
    .catch((error) => {
      console.error("A problem with the fetch operation:", error);
    });
}
// End of the fetchData() function
// --------------------------------------------------

// Update the state of casing check
function handleCasingCheckChange() {
  if (ignoreCasingCheckbox.checked === true) {
    casingIsChecked = false;
  } else if (ignoreCasingCheckbox.checked === false) {
    casingIsChecked = true;
  }
}
// End of handleCasingCheckChange() function
// --------------------------------------------------

// Handle when a new title is chosen in the dropdown
function handleTextTitleChange() {
  // Extract the chosen text title from the dropdown
  chosenTextTitle = this.value;

  // Loop over titles to find needed data
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i].textContent;
    // When find the title of the chosen text
    if (title === chosenTextTitle) {
      // chosenTextTitle = title;
      chosenTextAuthor = titles[i].nextElementSibling.textContent;
      chosenText = titles[i].nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    }
  }
  updateDisplayedText();
}
// End of the handleTextTitleChange() function
// --------------------------------------------------

// Update the displayed text on the page
function updateDisplayedText() {
  // Initiate local variables
  var displayedTitle = document.getElementById("displayed-title");
  var displayedAuthorName = document.getElementById("displayed-author-name");
  var displayedText = document.getElementById("display-chosen-text");
  var wordsAmount = document.getElementById("words-amount");
  var characterAmount = document.getElementById("character-amount");

  // Count the amount of words and characters in the text
  // Count the amount of words
  // The first .replace - exclude  start and end white-space, the second .replace - make 2 or more spaces to 1, the third .replace - exclude newline with a start spacing. To filter out empty strings: .filter(function(str){return str!="";})
  let wordCount = chosenText.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n").split(" ").filter(function (str) {
    return str != "";
  }).length;
  // Count the total amount of characters in the text
  let characterCount = chosenText.length;

  // Call the function to save the text as an array of <span> elements
  makeTextSpanArray();

  // Output text data on the page
  displayedTitle.innerText = chosenTextTitle;
  displayedAuthorName.innerText = chosenTextAuthor;
  wordsAmount.innerText = wordCount;
  characterAmount.innerText = characterCount;

  // Output the text consisting of span elements on the page
  let textSpanString = textArray.join("");
  displayedText.innerHTML = textSpanString;
}
// End of the updateDisplayedText() function
// --------------------------------------------------

// Make an array of <span> elements of the text
function makeTextSpanArray() {
  textArray = [];
  for (let char of chosenText) {
    let elem = `<span>${char}</span>`;
    textArray.push(elem);
  }
}
// End of the makeTextSpanArray() function
// --------------------------------------------------

// Handle a language selection
function handleLanguageChange() {
  let selectedLanguage = document.querySelector(
    'input[name="language"]:checked'
  ).value;
  // Update options' visibility based on the selected language
  if (selectedLanguage === "swedish") {
    for (let i = 0; i < swedishOptions.length; i++) {
      // If it contains the class invisible
      if (swedishOptions[i].classList.contains("invisible")) {
        swedishOptions[i].classList.remove("invisible");
      }
    }
    for (let i = 0; i < englishOptions.length; i++) {
      // If it does not contain the class invisible
      if (!englishOptions[i].classList.contains("invisible")) {
        englishOptions[i].classList.add("invisible");
      }
    }
    // Select the first option in the dropdown
    swedishOptions[0].selected = true;
  } else if (selectedLanguage === "english") {
    for (let i = 0; i < englishOptions.length; i++) {
      // If it contains the class invisible
      if (englishOptions[i].classList.contains("invisible")) {
        englishOptions[i].classList.remove("invisible");
      }
    }
    for (let i = 0; i < swedishOptions.length; i++) {
      // If it does not contain the class invisible
      if (!swedishOptions[i].classList.contains("invisible")) {
        swedishOptions[i].classList.add("invisible");
      }
    }
    // Select the first option in the dropdown
    englishOptions[0].selected = true;
  }
  // Trigger the change event in the dropdown
  var event = new Event("change");
  textDropdown.dispatchEvent(event);

  // Statistics must be 0
  if (grossWMP !== 0 || netWPM !== 0 || accuracyRate !== 0 || errorCount !== 0) {
    grossWMP = 0;
    netWPM = 0;
    accuracyRate = 0;
    errorCount = 0;
    // Output zeros on the screen
    grossWmpElem.innerText = 0;
    netWmpElem.innerText = 0;
    accuracyElem.innerText = 0;
    errorsElem.innerText = 0;
  }
}
// End of the handleLanguageChange() function
// --------------------------------------------------

// Start the game
function startGame() {
  // Empty the text input field
  let textInputField = document.getElementById("text-input-field");
  textInputField.value = "";
  textInputField.placeholder = "Type here...";
  // Show the stop button
  if (stopButton.classList.contains("invisible")) {
    stopButton.classList.remove("invisible");
    playButton.classList.add("invisible");
  }
  // Disable the checkbox for casing check
  ignoreCasingCheckbox.disabled = true;
  // Disable radio buttons
  let radioButtons = document.querySelectorAll('input[name="language"]');
  radioButtons.forEach(function (radioButton) {
    radioButton.disabled = true;
  });
  // Disbale the dropdown
  textDropdown.disabled = true;
  // Add an event listener for when a user is typing in the input field
  document.getElementById("text-input-field").addEventListener("input", handleUserTextInput);
  textSpans = document.querySelectorAll("#display-chosen-text span");
  // Put the number on inputted characters to 0
  typeCount = 0;

  // Clear the displayed text field and remove all classes from the spans
  for (let i = 0; i < textSpans.length; i++) {
    if (
      textSpans[i].classList.contains("infocus") ||
      textSpans[i].classList.contains("correctly-typed") ||
      textSpans[i].classList.contains("incorrectly-typed")
    ) {
      while (textSpans[i].classList.length > 0) {
        textSpans[i].classList.remove(textSpans[i].classList.item(0));
      }
    }
  }
  // Highlight what symbol to start typing with
  textSpans[typeCount].classList.add("infocus");
  // Put statistics to 0
  if (grossWMP !== 0 || netWPM !== 0 || accuracyRate !== 0 || errorCount !== 0) {
    grossWMP = 0;
    netWPM = 0;
    accuracyRate = 0;
    errorCount = 0;
    // Output zeros on the screen
    grossWmpElem.innerText = 0;
    netWmpElem.innerText = 0;
    accuracyElem.innerText = 0;
    errorsElem.innerText = 0;
  }
  // Initiate empty arrays for typed characters and correctly typed characters
  typedChars = []; // An array for separate characters
  correctlyTypedChars = [];
  // Set a new game timer
  startTime = new Date().getTime();
}
// End of the startGame() function
// --------------------------------------------------

// Stop the game
function stopGame() {
  // Show the start button
  if (playButton.classList.contains("invisible")) {
    playButton.classList.remove("invisible");
    stopButton.classList.add("invisible");
  }
  // Enable the checkbox for casing check
  ignoreCasingCheckbox.disabled = false;
  // Enable radio buttons
  let radioButtons = document.querySelectorAll('input[name="language"]');
  radioButtons.forEach(function (radioButton) {
    radioButton.disabled = false;
  });
  // Enable the dropdown
  textDropdown.disabled = false;
  // Remove an event listener for typingfrom the input field
  document.getElementById("text-input-field").removeEventListener("input", handleUserTextInput);
}
// End of the stopGame() function
// --------------------------------------------------

// Handle a text input made by a user
function handleUserTextInput(event) {
  typeCount++;
  // Highlight what symbol to type next
  textSpans[typeCount].classList.add("infocus");
  // Save the inputted character in a variable
  inputtedValue = event.target.value;
  // Leave only one character
  if (inputtedValue.length > 1) {
    inputtedValue = inputtedValue[inputtedValue.length - 1];
  }
  // Clear the input field after a backspace (after a word)
  if (inputtedValue === " ") {
    event.target.value = "";
  }
  checkInputtedValue();
}
// End of the handleUserTextInput(event) function
// --------------------------------------------------

// Check the inputted value
function checkInputtedValue() {
  let index = typeCount - 1;
  // Save the typed value into an array
  typedChars.push(inputtedValue);
  // Check if the character is correct
  if (casingIsChecked === true) {
    // If a character is correct
    if (textSpans[index].textContent === inputtedValue) {
      correctlyTypedChars.push(inputtedValue);
      if (textSpans[index].classList.contains("infocus")) {
        textSpans[index].classList.remove("infocus");
        textSpans[index].classList.add("correctly-typed");
      }
      // If a character is incorrect
    } else {
      document.getElementById("errorSound").play();
      errorCount++;
      if (textSpans[index].classList.contains("infocus")) {
        textSpans[index].classList.remove("infocus");
        textSpans[index].classList.add("incorrectly-typed");
      }
    }
  } else if (casingIsChecked === false) {
    // If a character is correct
    if (
      textSpans[index].textContent.toLowerCase() === inputtedValue.toLowerCase()
    ) {
      correctlyTypedChars.push(inputtedValue);
      if (textSpans[index].classList.contains("infocus")) {
        textSpans[index].classList.remove("infocus");
        textSpans[index].classList.add("correctly-typed");
      }
    } else {
      document.getElementById("errorSound").play();
      errorCount++;
      if (textSpans[index].classList.contains("infocus")) {
        textSpans[index].classList.remove("infocus");
        textSpans[index].classList.add("incorrectly-typed");
      }
    }
  }
  undateStatistics();
}
// End of the checkInputtedValue() function
// --------------------------------------------------

// Update statistics on the screen
function undateStatistics() {
  // Calculate the time elapsed from the beginning of the game
  const currentTime = new Date().getTime(); // Current time in milliseconds
  const elapsedTime = (currentTime - startTime) / 60000; // Converting time to minutes

  // Calculate and output accuracy rate
  accuracyRate = (correctlyTypedChars.length / typedChars.length).toFixed(2);
  accuracyElem.innerText = accuracyRate;

  // Output error count
  errorsElem.innerText = errorCount;

  // Calculate the WMPs and output them on the page
  grossWMP = Math.round(typedChars.length / 5 / elapsedTime);
  netWPM = Math.round(grossWMP - errorCount / elapsedTime);
  grossWmpElem.innerText = grossWMP;
  netWmpElem.innerText = netWPM;

  // End of the undateStatistics() function
  // -------------------------------------------------
}
