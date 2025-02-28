import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href='facebook.com'><i class="fa-brands fa-facebook"> </i></a>
            <a href="instagram.com"><i class="fa-brands fa-instagram"> </i></a>
            <a href="linkedin.com"><i class="fa-brands fa-linkedin"> </i></a>
        </div>
        <div class="footerNav">
            <ul>
                <li><a href="/"> Inicio </a></li>
                <li><Link to ="/api/villanos"> Villanos </Link></li>
                <li><Link to = "api/villanos/marvel"> Marvel </Link></li>
                <li><Link to = "api/villanos/dc"> DC </Link></li>
            </ul>
        </div>
    </div>
    <div class="footerBottom">
        <p> Copyright &copy; 2025; Producido por <span class = 'designer'> Gibrán y Héctor</span></p>
    </div>
    </footer>
  );
};

export default Footer;