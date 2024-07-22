import { Box, Container, Flex,useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../Components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../Components/SuggestedUsers/SuggestedUsers'

const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box
        flex={2}
        py={10}
      >
          <FeedPosts/>
        </Box>
        <Box flex={3} mr={20} display={{base:'none',lg:'block'}} maxW={"300px"}  >
      { !isMobile && <SuggestedUsers/>}
        </Box>

      </Flex>

      {isMobile && <SuggestedUsers/>}
       
    </Container>
  )
}

export default HomePage