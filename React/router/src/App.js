
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
			<Link to="/blog"> blog</Link>
      <Link to="/blog/2"> blog-id </Link>

      <Routes>
        <Route path="/" element={<Index />}/>

        <Route path="/blog/*" element={<Blog/>}>
          <Route path="" element={<div>아이디없음</div>}/>
          <Route path=":id" element={<BlogId/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

function Index(){
  return <h1>home</h1>
}
function Blog(){
  return (
    <>
    <h1>Blog</h1>
      <Outlet/>
    </>
  )
}
function BlogId(){
  const { id } = useParams()
  return <strong>{id}</strong>
}
export default App;