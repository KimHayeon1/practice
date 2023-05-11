import styles from './Start.module.css'
import Btn from '../Btn/Btn'
import startImg from '../../img/click.png'

export default function Start(props) {
  const startBtnHandle = function() {
    if (props.fieldInp && props.timeInp) {
      props.setResult([props.fieldInp, props.timeInp])
    } else {
      alert('입력해주세요.')
    }
  }
  return (
    <div className={styles.start}>
      {/* <button className='btn-black' onClick={startBtnHandle} type='button'>나는 며칠 동안 훈련해야 전문가가 될 수 있을까?</button> */}
      <Btn f={startBtnHandle} />
      <img src={startImg} alt="버튼을 가리키는 화살표 이미지" />
    </div>
  );
}