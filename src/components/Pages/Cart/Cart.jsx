import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import style from './Cart.module.css';
export const Cart = () => {
    const data = useSelector((store) => store.Cartreducer.cartData);
    const [products, setProduct] = useState([]);
    const[discontPrice, setDiscontPrice] = useState(0);

    useEffect(() => {
        setProduct(data);
    },[data]);

    const addQuan = (el) => {
      data[el].q = data[el].q + 1;
      console.log(data)
      setProduct([...data]);
    };

    const subQuan = (el) => {
      if(data[el].q === 1) {
        data.splice(el, 1);
        setProduct([...data]);
      } else {
        data[el].q = data[el].q - 1;
      setProduct([...data]);
      }
    }

    const [amount, setAmount] = useState(0);
    useEffect(() => {
    let m = 0;
        for(let i = 0; i <= products.length -1; i++) {
            m += Number(products[i].d)*products[i].q;
        };
        setAmount(m);



        let d = 0;
        for(let i = 0; i <= products.length -1; i++) {
            let p = products[i].c.split('.');
            d += Number(p[1])*products[i].q;
        };
        setDiscontPrice(d);
    }, [products, setProduct]);
    
  return (
       <>
       <div style={{
        display: 'flex',
       }}>
       <div className={style.cart}>
      {products.map((p, i) => {
        return (
          <div key={p.id} className={style.productdescription}>
            <div>
              <img src={p.a?p.a:"https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg"} alt="" width="90px" height="90px" />
            </div>
            <div style={{
                marginLeft: "12px"
            }}>
            <div className={style.producttitle}>{p.b}</div>
            <div className={style.productprice}>
              <div>Quan: {p.q}</div>
              <div><s>{p.c}</s></div>
              <div><b>Rs. {p.d}</b></div>
              <div></div>
            </div>
            </div>
            <div>
            </div>
            <div>
            <div className={style.removeButton} onClick={() => addQuan(i)}>+</div>
            <div className={style.removeButton} onClick={() => subQuan(i)}>-</div>
              </div>
          </div>
        );
      })}
    </div>
    <div className={style.cartsecondbox}>
        <div className={style.desiginingPriceSection}>
            <div>Total Product Price</div>
            <div><s>Rs. {discontPrice}</s></div>
        </div>
        <div className={style.desiginingPriceSection}><div>Total Price disccount</div>
        <div>-Rs. {discontPrice - amount}</div></div>
        <br />
        <div className={style.desiginingPriceSection}>
            <div style={{
                color: "orangered",
                fontWeight: "bold",
            }}>Final Amount</div>
            <div>Rs. {amount}</div>
        </div>
    </div>
       </div>
       </>
  )
}
