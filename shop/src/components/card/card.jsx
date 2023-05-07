import './Product.css'

async function getData() {
  const data = await fetch('http://test.api.weniv.co.kr/mall');
  return data.json();
}

async function Product() {
  const data = await getData();
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