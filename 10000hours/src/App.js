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
  const [start, setStart] = useState(false);
  const [fieldInp, setFieldInp] = useState('');
  const [timeInp, setTimeInp] = useState('');
  return (
    <main>
      <Title />
      <Intro />
      <Inputs setFieldInp={setFieldInp} setTimeInp={setTimeInp} />
      <Start fieldInp={fieldInp} timeInp={timeInp} setStart={setStart} />
      {start && <Result fieldInp={fieldInp} timeInp={timeInp} />}
      {start && <Buttons setModal={setModal}/>}
      {modal && <Modal />}
    </main>
  );
}
export default App;