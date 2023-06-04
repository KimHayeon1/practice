import React, { useState, useEffect } from 'react';
import './Product.css'

function Product() {
  const [data, setData] = useState([]);
  // const [data, setData] = useState(getData);
  async function getData() {
    const data = await fetch('http://test.api.weniv.co.kr/mall');
    const json =  await data.json();
    setData(json)
  }
  useEffect(() => {
    getData();
    console.log(data)
  }, [])

  return (
    <main className="main-1260">
      <ul className="product-list">
        {data.map(v => <Card goods={v}></Card>)}
      </ul>
    </main>
  );
}

function Card(a) {
  return (
    <li className="product">
      <img src={'http://test.api.weniv.co.kr/' + a.goods.thumbnailImg}/>
      <strong>{a.goods.productName}</strong>
      <strong>{a.goods.price}<span>원</span></strong>
    </li>
  )
}

export default Product;