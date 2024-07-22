import { Flex, Box, Container, Skeleton, SkeletonCircle, VStack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'
import SuggestedUsers from '../SuggestedUsers/SuggestedUsers'

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts()
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10' />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={"200px"} />
              <Skeleton height='10px' w={"100px"} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"400px"}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}

      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>

          {isMobile && <SuggestedUsers />}
        </>
      )}
    </Container>
  )
}

export default FeedPosts
