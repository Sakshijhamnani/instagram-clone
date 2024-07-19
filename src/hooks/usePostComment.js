import { useState } from 'react'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import { arrayUnion, updateDoc,doc } from 'firebase/firestore'
import usePostStore from '../store/postStore'
import { firestore } from '../Firebase/firebase'

const usePostComment = () => {
 const [isCommenting,setIsCommenting]=useState(false)
 const showToast=useShowToast()
 const authUser=useAuthStore(state=>state.user)
 const addComment=usePostStore(state=>state.addComment)

 const handlePostComment=async(postId,comment)=>{
    if(isCommenting) return;
    if(!authUser) return showToast("Error","You must be logged in to comment",'error')
    setIsCommenting(true)
    const newComment={
        comment:comment,
        createdAt:Date.now(),
        createdBy:authUser.uid,
        postId
    }
  try {
    await updateDoc(doc(firestore,"posts",postId),{
        comments:arrayUnion(newComment)
    })
    addComment(postId,newComment)
   
    
  } catch (error) {
    showToast("Error",error.message,'error')
  } finally{
    setIsCommenting(false)
  }
 }
 return {isCommenting,handlePostComment}
}

export default usePostComment