import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Product.module.css";
import { useSelector } from "react-redux";
import { ProductMiddleware } from "../../Redux/Action/Product";
import { CartSuccess } from "../../Redux/Action/Cart";
import { Navigation } from "../../Navigation/Navigation";
import { useNavigate } from "react-router";
import { productDetailsSuccess } from "../../Redux/Action/Productdetails";
export const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Productreducer.Products);
  const [renderCart, setRender] = useState(false);
  const cartData = useSelector((store) => store.Cartreducer.cartData);
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(ProductMiddleware());
  }, [dispatch]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const addingDataToCart = (a, b, c, d, e) => {
let flag = false;
    for(let i = 0; i <= cartData.length -1; i++) {
      if(cartData[i].id === e) {
        flag = true;
        break;
      }
    }
    
    if(!flag) {
      dispatch(CartSuccess({a:a, b:b, c:c, d:d, id:e, q:1}));
    setRender(renderCart? false: true)
    }

  }

  const productDetailsadd = (a, b, c, d, e) => {
    dispatch(productDetailsSuccess({a:a, b:b, c:c, d:d, id:e}));
    navigate(`/productdetails/${e}`)
  }

  return (
   <>
   <Navigation></Navigation>
    <div className={style.product}>
      {products.map((p) => {
        return (
          <div key={p._id} className={style.productdescription}>
            <div>
              <img src={p.image?p.image:"https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg"} alt="" width="200px" height="250px" />
            </div>
            <div className={style.producttitle}>{p.name}</div>
            <div className={style.productprice}>
              <div><s>{p.productstrike}</s></div>
              <div><b>Rs. {p.discountedPrice}</b></div>
            </div>
            <div className={style.button}>
                <div className={style.productbutton} onClick={() => addingDataToCart(p.image, p.name, p.productstrike, p.discountedPrice, p._id)}>Add cart</div>
                <div className={style.productbutton} onClick={() => productDetailsadd(p.image, p.name, p.productstrike, p.discountedPrice, p._id)}>Add review</div>
            </div>
          </div>
        );
      })}
    </div>
   </>
  );
};
