import './Inputs.css'

export default function Inputs(props) {
  const fieldInpHandle = function(e) {
    props.setFieldInp(e.target.value)
    console.log(props.fieldInp)
  }
  const timeInpHandle = function(e) {
    props.setTimeInp(e.target.value)
  }
  return (
    <div className='inp-wrap'>
      <div className='input-wrap'>
        나는
        <input onChange={fieldInpHandle} type="text" placeholder="예)프로그래밍"/>
        전문가가 될 것이다.
      </div>
      <div className='input-wrap'>
        그래서 매일 하루에
        <input onChange={timeInpHandle} type="number" placeholder="예)5" min={0} max={24}/>
        시간씩 훈련할 것이다.
      </div>
    </div>
  );
}