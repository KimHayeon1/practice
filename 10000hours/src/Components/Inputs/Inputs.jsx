import './Inputs.css'

export default function Inputs() {
  return (
    <div className='inp-wrap'>
      <div className='input-wrap'>
        나는
        <input type="text" placeholder="예)프로그래밍"/>
        전문가가 될 것이다.
      </div>
      <div className='input-wrap'>
        그래서 매일 하루에
        <input type="number" placeholder="예)5"/>
        시간씩 훈련할 것이다.
      </div>
    </div>
  );
}