import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// Interface defining the props expected by the SortSelector component
interface Props {
  onSelectSortOrder: (sortOrder: string) => void; // Function to handle sort order selection
  sortOrder: string; // The currently selected sort order
}

// Component for selecting the sort order of a list of items (in this case - games)
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // Array of available sort orders with their corresponding labels for display
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Finding the currently selected sort order object for displaying its label
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    // Menu component from Chakra UI for the dropdown functionality
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
