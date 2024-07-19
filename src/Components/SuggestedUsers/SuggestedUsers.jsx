import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
  const {isLoading,suggestedUsers}=useGetSuggestedUsers();
  
  //optional :render loading skeleteon
  if(isLoading) return null
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

       {suggestedUsers.length!=0 && <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
               Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
               See All
            </Text>

        </Flex>}

        {suggestedUsers.map(user=>(
          <SuggestedUser user={user} key={user.id}/>
        ))}

        <Box fontSize={12} color={"gray.600"} alignSelf={"start"}>
        © 2024 INSTAGRAM FROM META 
        </Box>

    </VStack>
  )
}

export default SuggestedUsers