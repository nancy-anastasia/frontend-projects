import { Badge } from "@chakra-ui/react";

// Interface defining the props expected by the CriticScore component
interface Props {
  score: number; // The critic score that will be displayed
}

// Component to display a critic score with color-coding based on the score's value
const CriticScore = ({ score }: Props) => {
  // Determine the color of the badge based on the score value
  let color = score >= 90 ? "#24B3A8" : "#E0E0E0";
  let textColor = score >= 90 ? "#FCFCFC" : "#000000";

  return (
    // Displaying the score within a Badge component from Chakra UI
    <Badge
      style={{ backgroundColor: color, color: textColor }} // Sets the color of the badge based on the score
      fontSize="14px" // Sets the font size of the text inside the badge
      paddingX="10px" // Sets the horizontal padding inside the badge
      borderRadius="4px" // Sets the border radius for rounded corners
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
