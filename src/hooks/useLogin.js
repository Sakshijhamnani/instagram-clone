import useShowToast from './useShowToast'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const useLogin = () => {
 const showtoast=useShowToast();
 const [
    signInWithEmailAndPassword,
    user, 
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const loginUser=useAuthStore((state)=>state.login)

   const login=async(inputs)=>{
    if(!inputs.email || !inputs.password){
        return showtoast("Error","Please fill all the fields","error");
    }
    try {

        const userCred=await signInWithEmailAndPassword(inputs.email,inputs.password);
        // console.log('usercred',userCred)

        if(userCred){
           const docRef=doc(firestore,"users",userCred.user.uid);
           const docSnap=await getDoc(docRef);
            localStorage.setItem('user-info',JSON.stringify(docSnap.data()))
            loginUser(docSnap.data())
        }
        
    } catch (error) {
        
      showtoast("Error",error.message,"error")  
    }
   }

  return {loading,error,login}
}

export default useLogin