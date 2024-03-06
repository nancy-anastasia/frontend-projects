import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// Interface defining the props expected by the GenreList component
interface Props {
  onSelectGenre: (genre: Genre) => void; // Function to handle genre selection
  selectedGenre: Genre | null; // The currently selected genre, if there is one
}

// Component to display a list of game genres, which allows the user to select one
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres(); // Fetching genre data using the custom hook

  if (error) return null; // If there is an error fetching genres, do not render anything
  if (isLoading) return <Spinner />; // Show a loading spinner while genre data is being fetched

  return (
    <>
      <Heading fontSize="2xl" marginY={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {/* Displaying a cropped image for each genre */}
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* Button to select a genre. It is highlighted if it's a currently selected genre */}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
