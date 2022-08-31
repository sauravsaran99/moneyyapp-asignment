import React, { useState } from 'react'
import style from './Productdetails.module.css';
import { useSelector } from 'react-redux';
export const Productdetails = () => {
    const p = useSelector((store) => store.ProductDetailsreducer.productDetails);

    const [review, setReview] = useState({
        review: '',
    });
    const [allReview, setAllreveiw] = useState([])

    const setReveiwinarr = (e) => {
setReview({[e.target.name]: e.target.value});
    }

    const submitReview = (e) => {
        e.preventDefault();
        setAllreveiw([...allReview, review]);
        setReview({
        review: '',
        })
    };

    console.log(allReview)
  return (
    <div className={style.productdetails}>
        <div key={p.id} className={style.productdescription}>
            <div>
              <img src={p.a?p.a:"https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg"} alt="" width="90px" height="90px" />
            </div>
            <div style={{
                marginLeft: "12px"
            }}>
            <div className={style.producttitle}>{p.b}</div>
            <div className={style.productprice}>
              <div><s>{p.c}</s></div>
              <div><b>Rs. {p.d}</b></div>
              <div></div>
            </div>
            </div>
            <div>
            </div>
            {allReview.map((e, i) => {
                console.log(e, i)
                return(
                    <div key={i} style={{
                        display: 'flex',
                        margin: "12px",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        padding: "5px"
                    }}>
                        <div style={{
                            margin: "10px"
                        }}>
                        <img src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg" alt="profile" width="30px" height="30px" />
                        </div>
                        <div>{e.review}</div>
                        </div>
                )
            })}
          </div>
          <form onSubmit={submitReview}>
            <h3>Add review</h3>
            <textarea id="w3review" name="review" onChange={(e) => setReveiwinarr(e)} rows="4" cols="50">
</textarea>
<button>Submit</button>
          </form>
    </div>
  )
}
