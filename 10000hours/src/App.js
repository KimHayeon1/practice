import './Wrap.css'
import Title from "./Components/Title/Title"
import Intro from "./Components/Intro/Intro"
import Inputs from "./Components/Inputs/Inputs"
import Start from "./Components/Start/Start"
import Result from "./Components/Result/Result"
import Buttons from "./Components/Buttons/Buttons.jsx"
import Modal from "./Components/Modal/Modal.jsx"
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false);
  const [result, setResult] = useState([]);
  const [fieldInp, setFieldInp] = useState('');
  const [timeInp, setTimeInp] = useState('');
  return (
    <main>
      <Title />
      <Intro />
      <Inputs setFieldInp={setFieldInp} setTimeInp={setTimeInp} />
      <Start fieldInp={fieldInp} timeInp={timeInp} setResult={setResult} />
      {(result.length !== 0) && <Result result={result} />}
      {(result.length !== 0) && <Buttons setModal={setModal}/>}
      {modal && <Modal setModal={setModal}/>}
    </main>
  );
}
export default App;