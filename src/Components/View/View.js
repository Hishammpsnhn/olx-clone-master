import { collection, getDocs, onSnapshot, query,where } from 'firebase/firestore';
import React, { useState, useContext, useEffect } from 'react';
import { PostContext } from '../../store/PostContext';
import { db } from '../../firebase/config';
import './View.css';
function View() {
  const {postDetails,setPostDetails} = useContext(PostContext)

  console.log(postDetails)
  const [userDetails, setUserDetails] = useState()
  useEffect(() => {
    const { user } = postDetails
    const q = query(collection(db, 'users'),where('id', '==', user)) 
   onSnapshot(q,(snapshot)=>{
     snapshot.forEach(doc =>{
       setUserDetails(doc.data())
     })
   })
      
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.catagory}</p>
          <span>{postDetails.cratedAt}</span>
        </div>
        {userDetails &&
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        }
      </div>
    </div>
  );
}
export default View;
