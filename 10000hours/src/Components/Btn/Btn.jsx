import s from './Btn.module.css'
export default function Btn({f, text}) {
  return <button onClick={f} className='btn-' type='button'>{text}</button>;
}