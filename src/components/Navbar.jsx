import { Link } from "react-router-dom"
import "../nav.css"

 const Navbar = () => {
  return (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo"> Devi Sita Foundation</h1>
      <ul className="nav-links">
        <li> <Link to ="/">Home</Link> </li>
        <li> <Link to ="/about">About</Link> </li>
        <li> <Link to ="/projects">Projects</Link> </li> 
        <li> <Link to ="/contact">Contact</Link> </li> 
        
      </ul>

    </div>
  </nav>
  )
  
}
export default Navbar