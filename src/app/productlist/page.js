"use client"
import React, { useEffect, useState } from 'react'

const ProductList = () => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json();
    return setProducts(data.products)
  }

  return (
    <>
      <h1>Product List</h1>
      {
        product.map((item, index) => {
          return (
            <div key={index}>
              {item.title}
            </div>
          )
        })
      }
    </>
  )
}

export default ProductList