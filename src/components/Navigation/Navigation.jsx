import React from 'react'
import style from './Navigation.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const navigate= useNavigate();
    const data = useSelector((store) => store.Cartreducer.cartData);
  return (
    <div className={style.navigation}>
        <div className={style.navigationicons}>Login</div>
        <div className={style.navigationicons}>Signup</div>
        <div className={style.navigationicons} onClick={() => navigate('/cart')}>
            {data.length !== 0?<div className={style.cartCount}>{data.length}</div>:''}
            <ShoppingCartIcon ></ShoppingCartIcon>
        </div>
    </div>
  )
}
