// import { NavLink } from "react-router-dom"
import Logo from '../Images/logo.png'


function Header() {
    return (
        <>
            <div className="header">
                <div className="top-header">Turning Uncertainity Into your advantage</div>
                <div className="bottom-header">
                    <div className="logo">
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className="nav">HOME</div>
                    <div className="nav">ABOUT US</div>
                    <div className="nav">OUR SERVICES</div>
                    <div className="nav">OUR EXPERIENCE</div>
                    <div className="nav">RESOURCES</div>
                    <div className="button">CONTACT US</div>
                    <div className="social-connection">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header