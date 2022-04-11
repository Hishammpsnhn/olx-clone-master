import React, { useState, Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';

import { useNavigate } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { app, db, storage } from '../../firebase/config';

import { AuthContext } from '../../store/Context';

const Create = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  console.log(user)
  
  const [name, setName] = useState('')
  const [catagory, setCatagory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState()
  const date = new Date()

  const handleSubmit = (e) => {
    e.preventDefault()
    const storageRef = ref(storage, ` images/ ${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        

        getDownloadURL(uploadTask.snapshot.ref)
        .then((url) =>{
          const articleRef = collection(db ,"products");
          addDoc(articleRef,{
            name:name,
            catagory:catagory,
            price:price,
            imageUrl:url,
            user:user.uid,
            cratedAt:date.toDateString(),
          })
          .then(()=>{
              navigate('/')
          })
          .catch((err)=>{
            console.log("something an error")
          })

          
        })
      }
    )
    
  };



  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
              value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />

          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <form>
            <br />
            <input
              onChange={(e) => {
                setImage(e.target.files[0])
              }}
              type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
