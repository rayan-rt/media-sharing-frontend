import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Flex,
} from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex height="100vh" width="100%" align="center" justify="center">
      <Stack gap="6" maxW="xs" align="center">
        <HStack width="full">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
        <Skeleton height="200px" width="full" />
      </Stack>
    </Flex>
  );
};

export default Loader;
