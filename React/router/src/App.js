
import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
			<Link to="/blog"> blog</Link>
      <Link to="/blog/2"> four_2 </Link>

      <Routes>
        <Route path="/" element={<Index />}/>
        {/* element와 Component 차이는? */}
        {/* <Route path="/blog/*" element={<Blog/>}/> */}
        <Route path="/blog/*" element={<Outlet/>}>
          <Route path="" element={<Blog/>}/>
          <Route path=":id" element={<div>bbb</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function Blog(){
  const { id } = useParams()
  console.log(id)
	const location = useLocation();
  console.log(location)
  return (
    <>
      <h1>hello Blog{id}</h1>
      {/* <Routes>
        <Route path="" element={<Outlet/>}>
          <Route path="" element={<div>aaa</div>}/>
          <Route path=":id" element={<div>bbb</div>}/>
        </Route>
      </Routes> */}
    </>
  )
}
export default App;