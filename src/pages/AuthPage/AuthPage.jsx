import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
   <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
    <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            {/* Left Hand side */}
            <Box display={{base:"none",md:"block"}}>
                <Image src='/auth.png' height={650} alt='Phone img'/>
            </Box>

            {/* Right hand side */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the App</Box>
                <Flex gap={5} justifyContent={"center"}>

                    <Image src='/playstore.png' h={10} />
                    <Image src='/microsoft.png' h={"10"} alt='Microsoft logo'/>
                </Flex>

            </VStack>

        </Flex>

    </Container>

   </Flex>
  )
}

export default AuthPage