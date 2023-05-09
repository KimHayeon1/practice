import './Result.css'

export default function Result(props) {
  const day = Math.trunc(10000 / props.timeInp)
  const time = 10000 % props.timeInp
  return (
    <>
      <div className='result-txt'>
        당신은
        <span id='field-result'>{props.fieldInp}</span>
        전문가가 되기 위해
      </div>
      
      <div className='result-txt'>
        <span id='time-result'>{day}</span>
        일 {time && time+'시간'} 훈련하셔야 합니다! :)
      </div>
    </>
  );
}