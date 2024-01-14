# Project Assignment

## Environment & Tools
This assignment was done using a computer with macOS Ventura 13.4 and two IDEs. One was Visual Studio Code 1.84.2 (Universal), and another was WebStorm 2023.2.4. The development was done in Visual Studio Code, while the deployment was completed using WebStorm. Additionally, the Git version was 2.33.0 in this project.

## Purpose
This assignment aims to develop a web application using HTML, CSS, and JavaScript, similar to Touch Typing, which tracks how fast and correctly a user can type symbols from the chosen text. The assignment description specifies requirements to which the final solution should adhere.

The exact goals for this assignment are:

- To develop a web application UI using HTML and CSS and structure a webpage following the assignment's requirements.
- To add a function that retrieves and parses text data from an XML file. 
- To add a new text and its details on the page when a user chooses another text from the dropdown menu. The user should be able to select the language of the text, Swedish or English, and the dropdown menu should be updated accordingly to provide options for a chosen language.
- To add play and stop buttons to start and stop the game accordingly and ensure that when a play button is clicked, the stop button is shown on the page and otherwise.
- To track the user input and compare it with the characters in the displayed text as a user is typing. The user should be able to see the progress as they are typing and errors made while doing so. It should be implemented according to the requirements stated in the assignment.
- To implement an option to turn off the casing check of the characters typed by the user.
- To track and display statistics about the user's typing speed and correctness of typed text. The UI should be updated while the user is typing, and this functionality should adhere to the assignment's requirements.
- To display the word and character statistics about a text next to the author's name.
- To add at least two fonts using **`@font-face`**.
- To implement an animation of an element in the page header using **`@keyframes`**.
- To add a sound that should be played when a user types an incorrect symbol in the input field.

## Procedures
The work on this assignment started by cloning a dedicated repository on Bitbucket. The UI was first developed according to the assignment requirements using HTML and CSS to accommodate the functionality for grades up to B. Then, JavaScript was used to provide the interactivity of the solution and needed functionality for grades up to B level. 

First, the section for global variables was added to the JavaScript file **`main.js`**. After that, the **`init()`** function is followed to add event listeners to the elements on the page and retrieve data from an XML file using the **`fetchData()`** function. This function was triggered by **`window.addEventListener("load", init);`**, which followed after the function. 

Then, the **`fetchData()`** function was implemented to retrieve and parse text data from the provided XML file. It was implemented as follows:

    // Fetch data from the XML file
    function fetchData() {
      // Retreive the XML file
      fetch("https://studenter.miun.se/~naku2300/dt146g/project/texts.xml")
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
        })
        // Catch an eventual error with the fetch operation
        .catch((error) => {
        console.error("A problem with the fetch operation:", error);
        });
    }
    // End of the fetchData() function
    // --------------------------------------------------

Then, the **`handleTextTitleChange()`** function was implemented to track the changes in the dropdown menu when a user chooses another text from the list so that the page can be updated accordingly. The text title value is retrieved from the **`<select>`** element using **`chosenTextTitle = this.value;`**. Then, the title is found in the data from the XML file, and the author's name and text are retrieved and saved in corresponding variables **`chosenTextAuthor`** and **`chosenText`**. It is implemented as follows:

    // Handle when a new title is chosen in the dropdown
    function handleTextTitleChange() {
      // Extract the chosen text title from the dropdown
      chosenTextTitle = this.value;

      // Loop over titles to find needed data
      for (let i = 0; i < titles.length; i++) {
        let title = titles[i].textContent;
        // When find the title of the chosen text
        if (title === chosenTextTitle) {
          // Retrieve the author name and text
          chosenTextAuthor = titles[i].nextElementSibling.textContent;
          chosenText = titles[i].nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        }
      }
      updateDisplayedText();
    }
    // End of the handleTextTitleChange() function
    // --------------------------------------------------

The **`updateDisplayedText()`** function is called from the **`handleTextTitleChange()`** function to ensure that the displayed text is updated and the text statistics related to the word and character count are calculated and displayed on the page as well. Furthermore, the **`makeTextSpanArray()`** function is called from the **`updateDisplayedText()`** function to convert a text string to an array of span elements that can be outputted on the page. The **`updateDisplayedText()`** function is developed as follows:

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

And the **`makeTextSpanArray()`** function is implemented as follows:

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

Furthermore, the functionality to update the dropdown based on the language selected by the user is implemented in the **`handleLanguageChange()`** function, which tracks the events occurring on the radio buttons for language selection and tracks what language is chosen by a user. The class **`.invisible`** is added to the text options in the dropdown menu that belong to the group that was not chosen. Then, the change event is triggered in the dropdown to ensure that it is updated according to the new requirements while the typing statistics is updated, as it will most likely be another text displayed on the page:

    // Trigger the change event in the dropdown
    var event = new Event("change");
    textDropdown.dispatchEvent(event);

Then, the **`startGame()`** and **`stopGame()`** functions were developed. They are triggered by click events on the play and stop buttons correspondingly. The **`startGame()`** function ensures that the play button is hidden and the stop button is displayed instead. Furthermore, it ensures that the input that a user can make in the input field before clicking on the play button is deleted from the input field, and the placeholder text "Type here..." is shown there instead: 

    // Empty the text input field
    let textInputField = document.getElementById("text-input-field");
    textInputField.value = "";
    textInputField.placeholder = "Type here...";
    // Show the stop button
    if (stopButton.classList.contains("invisible")) {
      stopButton.classList.remove("invisible");
      playButton.classList.add("invisible");
    }

The checkbox, radio buttons, and dropdown are disabled in the **`startGame()`** function so that they would not trigger UI updates when the game is ongoing:

    // Disable the checkbox for casing check
    ignoreCasingCheckbox.disabled = true;
    // Disable radio buttons
    let radioButtons = document.querySelectorAll('input[name="language"]');
    radioButtons.forEach(function (radioButton) {
      radioButton.disabled = true;
    });
    // Disbale the dropdown
    textDropdown.disabled = true;

Then, an event listener is added to the input field, references to the **`<span>`** elements in the text are saved in an array, and a type count for user typing in the input field is set to zero:

    // Add an event listener for when a user is typing in the input field
    document.getElementById("text-input-field").addEventListener("input", handleUserTextInput);

    // Select all spans in the text
    textSpans = document.querySelectorAll("#display-chosen-text span");

    // Put the number on inputted characters to 0
    typeCount = 0;

In case it is not the first game, the text is cleared from all markings from the previous game, and the symbol that the user should start typing with is highlighted:

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

In case there was a previous game with the same text, the statistics are checked and put to zero:

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

Two empty arrays are initiated to track typed characters:

    // Initiate empty arrays for typed characters and correctly typed characters
    typedChars = []; // An array for separate characters
    correctlyTypedChars = [];

And a timer is set on:

    // Set a new game timer
    startTime = new Date().getTime();

The **`stopGame()`** function is much shorter and it makes sure that the play button is visible again, enables the checkbox, radio buttons, and dropdown so that a user can choose another text and options, and removes an event listener from the input field:

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

The **`handleUserTextInput()`** function is triggered when a user is typing in the input field. It takes an event as an argument, extracts the inputted value, and clears the input field if the inputted value was a whitespace:

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

The **`checkInputtedValue()`** function is called from the **`handleUserTextInput()`** function to ensure that the inputted value is checked for correctness and the variable needed for statistics output is updated:

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
        if (textSpans[index].textContent.toLowerCase() === inputtedValue.toLowerCase()) {
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
      updateStatistics();
    }
    // End of the checkInputtedValue() function
    // --------------------------------------------------

The **`checkInputtedValue()`** function checks if the casing check is on by checking the boolean value of the **`casingIsChecked`** variable, which is updated by the **`handleCasingCheckChange()`** function, which is triggered by an event listener that is added to the "Ignore casing" checkbox on the application page:

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

The default value for the global variable **`casingIsChecked`** is "true", which means that the casing is checked by default. If a user checks the "Ignore casing" checkbox on the application page, the boolean value of this variable will be updated to "false". 

The **`updateStatistics ()`** function is called from the **`checkInputtedValue()`** function to ensure that the page statistics are updated after the inputted value is checked. This function is implemented as follows:

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

The UI add-ons regarding the use of **`@font-face`**, animation using **`@keyframes`**, and an error sound were added using HTML and CSS after implementing the critical functionality.

When the solution was developed, the HTML and CSS codes were validated, the solution was deployed to a remote web server, and its functionality was checked. For deployment purposes, the URL to the XML file in the **`fetch data`** was changed from the local link provided by the server running in the Visual Studio Code IDE to the link to the XML file on the remote web server, which is **`"https://studenter.miun.se/~naku2300/dt146g/project/texts.xml"`**. 

## Discussion 
### Purpose Fullfillment
As a result of this assignment, a web application that shows how fast and correctly a user types, somewhat similar to touch typing, was developed. This application has a UI designed using HTML and CSS, corresponding to the assignment requirements regarding structure and content. Therefore, this goal of the study is fulfilled.

Furthermore, this solution retrieves and parses text data from the XML file provided in the assignment. Additionally, the text details update on the page based on the chosen language (with the default text for this language) and the text selected by a user from the dropdown, corresponding to the assignment's requirements. It means that the goals related to this functionality were also achieved. 

In addition, the stop and play buttons were added to the page with functionality specified in the assignment descriptions. They triggered the functions that manage the start and end of the game. While the game is ongoing, the user input is tracked in the input field and compared to the characters in the text displayed on the page one by one. The user can see the progress as they are typing and the errors that they make. This functionality was implemented according to the assignment's requirements. So, the purposes related to that are fulfilled.

Moreover, an option to turn off the casing check is implemented in the solution so that the difference in casing does not affect the accuracy rate and error statistics. Besides, the typing statistics are displayed on the page and updated as a user is typing, as specified in the requirements. Additionally, the word and character statistics of the chosen text are displayed next to the author's name. With all said above, the assignment goals related to this functionality were also achieved. 

Additional UI elements like the addition of two fonts using **`@font-face`**, an animation using **`@keyframes`** for the component of the page header, and a sound playing when a user typed a wrong symbol were added to the HTML and CSS code of the solution.

To summarize, all assignment goals were considered and fulfilled during implementation, and the solution should adhere to the assignment's requirements for up to grade B. 

### Alternative approaches 
Alternative approaches can be employed in this assignment, for example, regarding how the HTML file is structured, and a grid layout can be used in the CSS file instead of the flexbox. Furthermore, the JavaScript file can be structured differently concerning how the functionality is divided between the functions. Some functions, such as the **`startGame()`** function, include many different features, which can be moved into separate ones. For example, the functionality of setting typing statistics to zero can be moved into a separate function, which can be called from the **`startGame()`** and **`handleLanguageChange()`** functions:

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

Furthermore, the list of global variables is rather long, but the code can be reviewed in case there may be some local variables. Although the intention was to make the functions shorter, that is why a long list of global variables is introduced at the beginning of the JavaScript file.

### Personal Reflection
This assignment was an excellent opportunity to practice HTML, CSS, and JavaScript. The JavaScript part was challenging but exciting regarding the implemented logic and code structure. It was difficult to keep track of all the global variables, so when the development was done, I double-checked whether all the variables were used and deleted the unused ones. Working with the development of the IU using HTML and CSS was also an interesting part of the assignment, especially in terms of design and layout.