import './Buttons.css'

export default function Buttons(props) {
  function shareBtnHandle() {
    alert('url이 복사되었습니다')
  }
  function goBtnHandle() {
    props.setModal(true)
  }
  return (
    <>
      <button type='button' className='btn-white' onClick={goBtnHandle}>훈련하러 가기</button>
      <button type='button' className='btn-black' onClick={shareBtnHandle}>결과 공유하기</button>
    </>
  );
}