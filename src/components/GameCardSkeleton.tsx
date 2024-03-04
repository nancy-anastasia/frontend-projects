import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// Component to display a skeleton screen as a placeholder for a GameCard while the content is loading
const GameCardSkeleton = () => {
  return (
    // Card component acting as the wrapper for the skeleton elements
    <Card>
      {/* Skeleton component used to simulate the loading state of an image or media content */}
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
