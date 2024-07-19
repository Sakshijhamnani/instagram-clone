import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword"

const Signup = () => {
    const [inputs,setIputs]=useState({
        fullname:'',
        username:'',
        email:'',
        password:'',
        
    })
    const [showPassword,setShowPassword]=useState(false);
    const {loading,error,signup}=useSignUpWithEmailAndPassword()
  return (
   <>
     <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setIputs({ ...inputs, email: e.target.value })}
      />
       <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setIputs({ ...inputs, username: e.target.value })}
      />
       <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullname}
        onChange={(e) => setIputs({ ...inputs, fullname: e.target.value })}
      />
     

      <InputGroup>
      <Input
        placeholder="Password"
        fontSize={14}
        type={showPassword ? "text":"password"}
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setIputs({ ...inputs, password: e.target.value })}
      />

      <InputRightElement h='full'>
      <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)}>
        {showPassword ? <ViewIcon/> : <ViewOffIcon/> }
     </Button>
      </InputRightElement>
      </InputGroup>

      {
        error && (
          <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon/>
              {error.message}
          </Alert>
        )
      }

      <Button w={"full "} colorScheme='blue' size={"sm"} fontSize={14} 
      isLoading={loading}
      onClick={()=>signup(inputs)}>
          Sign up
        </Button>
   </>
  )
}

export default Signup