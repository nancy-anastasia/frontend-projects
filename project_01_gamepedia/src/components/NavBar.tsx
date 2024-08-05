import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo-gamepedia.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// Interface defining the props expected by the NavBar component
interface Props {
  onSearch: (searchText: string) => void; // Function to handle search input
}

// Component for the application's navigation bar
const NavBar = ({ onSearch }: Props) => {
  return (
    // Horizontal stack for aligning navigation bar items, with space between them
    <HStack justifyContent="space-between" spacing="50px" padding="20px">
      <Image src={logo} boxSize="60px" borderRadius="lg" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
