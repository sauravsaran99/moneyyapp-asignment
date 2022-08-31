import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/product')
    }, [])
  return (
    <div>Home</div>
  )
}
