import './App.css';
import Product from './components/card/card.jsx'

async function App() {
  return (
    <div className="App">
      {await Product()} 
    </div>
  );
}

export default App;