import '../styles/Home.css'

import { Link } from 'react-router-dom'
// import logo from '../assets/logo-OP.png'

export default function Home() {
  return (
    <div className="container">
      <div className="box">
        {/* <img src={logo} alt="logo one piece"></img> */}
        <p>Bienvenue dans le monde de One Piece</p>
        <div className='goto'><Link to="/tomes">Les Tomes de One Piece</Link></div>
      </div>
      <div></div>
    </div>
  )
}
