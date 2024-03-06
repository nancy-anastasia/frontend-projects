import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// Component for toggling between light and dark color modes in the application
const ColorModeSwitch = () => {
  // Hook from Chakra UI to manage and toggle color modes
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    // Horizontal stack for aligning the switch and label
    <HStack padding="10px">
      <Switch
        colorScheme="green" // Sets the color theme of the switch
        isChecked={colorMode === "dark"} // Sets the switch to "on" if the current color mode is "dark"
        onChange={toggleColorMode} // Toggles the color mode between light and dark on switch
      />
      <Text whiteSpace="nowrap">Dark Mode</Text> // Label for the switch
    </HStack>
  );
};

export default ColorModeSwitch;
