import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

// Interface defining the props expected by the PlatformSelector component
interface Props {
  onSelectPlatform: (platform: Platform) => void; // Function to handle platform selection
  selectedPlatform: Platform | null; // The currently selected platform, if there is any
}

// Component for selecting a gaming platform from a dropdown menu
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms(); // Fetching platform data using the custom hook

  if (error) return null; // If there is an error fetching platforms, do not render anything

  return (
    // Menu component from Chakra UI for the dropdown functionality
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
