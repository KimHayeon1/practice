import './Btn.module.css'
export default function Btn({f, color, text}) {
  return <button onClick={f}className={`btn-${color}`} type='button'>{text}</button>;
}