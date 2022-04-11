import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { db } from '../../firebase/config';
import { PostContext } from '../../store/PostContext';
import './Post.css';

function Posts() {
const {postDetails,setPostDetails} = useContext(PostContext)
console.log (postDetails)
  const [product, setProduct] = useState([])
 const navigate = useNavigate()
  useEffect(() => {
    const productRef = collection(db, "products")
    const q = query(productRef)
    onSnapshot(q, (snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduct(products)
    })
  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            product.map(product => {
              return (
                <div className="card"
                onClick={()=>{
                  setPostDetails(product)
                  console.log(product)
                  navigate('/view')
                }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.catagory}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.cratedAt}</span>
                  </div>
                </div>

              )
            })
          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
