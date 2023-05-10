import './Modal.css'

export default function Modal(props) {
  function closeModal() {
    props.setModal(props.false)
  }
  return (
    <>
      <dialog className='modal' open>
        모달일세~
      <button type='button' onClick={closeModal}>닫기</button>  
      </dialog>
    </>
  );
}