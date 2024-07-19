import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [inputs,setIputs]=useState({
        email:'',
        password:'',
        
    })

    const{login,error,loading}=useLogin()
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        onChange={(e) => setIputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        onChange={(e) => setIputs({ ...inputs, password: e.target.value })}
      />
       {
        error && (
          <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon/>
              {error.message}
          </Alert>
        )
      }

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} isLoading={loading} onClick={()=>login(inputs)}>
        Login
      </Button>
    </>
  );
};

export default Login;
