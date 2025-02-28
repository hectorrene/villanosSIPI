//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css"
import pestana from "../assets/pestana.png"

const Header = () => {
  return (
    <nav>
        <Link to = "/"><img src={pestana} alt="pestana" width={100} height={100}/></Link>
        <ul>
            <li><Link className="nav-link active" to="/villanos/api"><p> villanos </p></Link></li>
            <li><Link to = '/villanos/api/marvel'><p> Marvel </p></Link></li>
            <li><Link to = '/villanos/api/dc'><p> DC </p></Link></li>
        </ul>
    </nav>
  );
}

export default Header;
