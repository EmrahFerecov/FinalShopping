import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
    <ul>
    <li className="icon"><i className="fas fa-running"></i></li> {/* Sol tarafta ikon */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/kadin">Woman</Link></li>
      <li><Link to="/erkek">Man</Link></li>
      <li><Link to="/cocuk">Child</Link></li>
      <li><Link to="/ayakkabi">Shoes</Link></li>
      <li><Link to="/giyim">Dress</Link></li>
      <li><Link to="/aksesuarlar">Accessories</Link></li>
      <li><Link to="/indirimler">Discounts</Link></li>
      <li><Link to="/hakkimizda">AboutUs</Link></li>
      <li><Link to="/iletisim">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar