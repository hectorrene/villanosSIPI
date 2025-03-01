//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css"
import pestana from "../assets/pestana.png"

const Header = () => {
  return (
    <nav>
        <Link to = "/"><img src={pestana} alt="pestana" width={100} height={100}/></Link>
        <ul>
            <li><Link to = '/villanos/api/marvel'><p> Marvel </p></Link></li>
            <li><Link to = '/villanos/api/dc'><p> DC </p></Link></li>
            <li><Link to = 'villanos/api/crear'> Añadir </Link></li>
        </ul>
    </nav>
  );
}

export default Header;
