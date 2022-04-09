====olx project======
"

`const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(username)
}`


this is onsubmit in form 'e.preventDefault 'is avoide refresh/reload of page when click on 
submit button and console is working  done.

====firebase====

=> how to make a authentication using email and password?

crate a firebase.js 
create firebase account
copy api from firebase to firebase.js in project
 import 

`
import {getAuth,
createUserWithEmailAndPassword
} from 'firebase/auth'

in singup page
initialize getAuth

const auth = getAuth();
`

this is for crate user with email and password
` 
const handleSubmit=(e)=>{
  e.preventDefault()
  createUserWithEmailAndPassword(auth,email,password)
`
add this in singup page
then add  a response if you want

`
  .then((response)=>{
    console.log(response.user)
    
    })
  
  .catch((err)=>{
    alert(err.message)
  })
`
this is for it worked or not worked
!!!completed!!
