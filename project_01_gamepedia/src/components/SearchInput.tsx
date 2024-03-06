import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// Interface defining the props expected by the SearchInput component
interface Props {
  onSearch: (searchText: string) => void; // Function to handle search submissions
}

// Component for a search input field, allowing users to search for games
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null); // useRef hook to access the input element

  return (
    // Wrapping the input in a form element to handle form submissions
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value); // If the input is not null, call onSearch with its current value
      }}
    >
      {/* Input group from Chakra UI to add an icon to the input field */}
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search games..."}
          variant="filled"
          _focus={{
            borderColor: "#818791",
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
