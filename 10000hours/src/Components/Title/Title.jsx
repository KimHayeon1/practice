import './Title.css'
import titImg from '../../img/tit3.png'

export default function Title() {
  return (
    <h1 className='title'><img src={titImg} alt="The 10,000 Hours Rule" /></h1>
  );
}