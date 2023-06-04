import './Result.css'

export default function Result(props) {
  const day = Math.trunc(10000 / props.result[1])
  const time = 10000 % props.result[1]
  return (
    <>
      <div className='result-txt'>
        당신은
        <span id='field-result'>{props.result[0]}</span>
        전문가가 되기 위해
      </div>
      
      <div className='result-txt'>
        <span id='time-result'>{day}</span>
        일 {time && time+'시간'} 훈련하셔야 합니다! :)
      </div>
    </>
  );
}