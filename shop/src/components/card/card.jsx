import React, { useState, useEffect } from 'react';
import './Product.css'

function Product() {
  const [data, setData] = useState([]);
  async function getData() {
    const data = await fetch('http://test.api.weniv.co.kr/mall');
    const json =  await data.json();
    setData(json)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <main className="main-1260">
      <ul className="product-list">
        {data.map(v => <Card goods={v}/>)}
      </ul>
    </main>
  );
}

function Card(a) {
  console.log(a.goods)
  return (
    <li className="product">
      <img src={'http://test.api.weniv.co.kr/' + a.goods.thumbnailImg}/>
      <strong>{a.goods.productName}</strong>
      <strong>{a.goods.price}<span>원</span></strong>
    </li>
  )
}

export default Product;