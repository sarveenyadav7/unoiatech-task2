import Banner from '../Images/banner.png'

import Howards from '../Images/howards.png'
import Commonwealth from '../Images/commonwealth.png'
import Ellery from '../Images/ellery.png'
import Ginzer from '../Images/ginzer.png'

import Path from '../Images/Path.svg'
import Triangle from '../Images/Triangle.svg'
import Path1 from '../Images/white-path.svg'
import Triangle1 from '../Images/white-triangle.svg'
import Banner2 from '../Images/banner2.png'
import Youtubelogo from '../Images/youtube.svg'
import Frame from '../Images/Frame.jpg'
import Logo1 from '../Images/logo1.png'
import Banner1 from '../Images/banner1.png'
import Banner3 from '../Images/banner3.png'


function Home() {
    return (
        <>
            <div className="banner">
                <img src={Banner} alt='banner' />
                <div className="shadow"></div>
                <div className="content">
                    <p>Start your story with Olvera</p>
                    <button>CONTACT US</button>
                </div>
            </div>
            <div className="aboutolvera">
                <p className="aboutolverap">About Olvera</p>
                <p className="sampletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="brands-collab">
                    <div className="companies">
                        <img src={Howards} alt='howards' />
                    </div>
                    <div className="companies">
                        <img src={Commonwealth} alt='commonwealth' />
                    </div>
                    <div className="companies">
                        <img src={Ellery} alt='ellery' />
                    </div>
                    <div className="companies">
                        <img src={Ginzer} alt='ginzer' />
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='clients'>
                    <div className='activities'>
                        <h1>150+</h1>
                        <p>Projects</p>
                    </div>
                    <div className='activities'>
                        <h1>150+</h1>
                        <p>Projects</p>
                    </div>
                    <div className='activities'>
                        <h1>150+</h1>
                        <p>Projects</p>
                    </div>
                    <div className='activities'>
                        <h1>150+</h1>
                        <p>Projects</p>
                    </div>
                </div>
                <div className='servicesinfo'>
                    <div className='serviceshelp'>
                        <h5>SERVICES</h5>
                        <h6>Our Services That Can Help Your Business</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div className='rankings'>
                        <div className='sustainability'>
                            <h5>Sustainability</h5>
                            <div className='arrowsign'>
                                <img src={Path} alt='path' className='path' />
                                <img src={Triangle} alt='triangle' className='triangle' />
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style={{ color: "red" }}></div>
                            </div>
                        </div>
                        <div className='sustainability'>
                            <p>02.</p>
                            <h5>Small Bussiness</h5>
                            <div className='arrowsign'>
                                <img src={Path} alt='path' className='path' />
                                <img src={Triangle} alt='triangle' className='triangle' />
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style={{ color: "red" }}></div>
                            </div>
                        </div>
                        <div className='sustainability'>
                            <p>03.</p>
                            <h5>Forensic Services</h5>
                            <div className='arrowsign'>
                                <img src={Path} alt='path' className='path' />
                                <img src={Triangle} alt='triangle' className='triangle' />
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style={{ color: "red" }}></div>
                            </div>
                        </div>
                        <div className='sustainability'>
                            <p>04.</p>
                            <h5>Risk Management</h5>
                            <div className='arrowsign'>
                                <img src={Path} alt='path' className='path' />
                                <img src={Triangle} alt='triangle' className='triangle' />
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style={{ color: "red" }}></div>
                            </div>
                        </div>
                        <div className='sustainability'>
                            <p>05.</p>
                            <h5>CFO Advisory</h5>
                            <div className='arrowsign'>
                                <img src={Path} alt='path' className='path' />
                                <img src={Triangle} alt='triangle' className='triangle' />
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style={{ color: "red" }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='guides'>
                <img src={Banner1} alt='banner1' />
                <div className="shadow1"></div>
                <h6>Olvera Guides</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='viewmore'>
                    <p>View More</p>
                    <div className='circle'>
                        <img src={Path1} alt='path' className='path' />
                        <img src={Triangle1} alt='triangle' className='triangle' />
                    </div>
                </div>
            </div>
            <div className='carriers'>
                <div className='carrierinfo'>
                    <h6>CAREERS</h6>
                    <h4>Careers at Olvera</h4>
                    <p>Navigate change, develop on-demand skills. Your turnaround journey starts with Olvera.</p>
                    <button>Search Careers</button>
                </div>
                <div className='carrierimg'>
                    <img src={Banner2} alt='path' className='banner2' />
                </div>
            </div>
            <div className='youtubebanner'>
                <img src={Banner3} alt='path' className='banner3' />
                <div className='shadow2'>
                    <img src={Youtubelogo} alt='youtube' />
                </div>

            </div>
            <div className='clientsopenion'>
                <h4>What our clients say about us</h4>
                <div className='clientreview'>
                    <div className='client'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,”</p>
                        <div className='client-details'>
                            <div className='frame'>
                                <img src={Frame} alt='frame' />
                            </div>
                            <h6>Aaron Boby</h6>
                            <p>2 November 2021</p>
                        </div>
                    </div>
                    <div className='client1'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,”</p>
                        <div className='client-details1'>
                            <div className='frame'>
                                <img src={Frame} alt='frame' />
                            </div>
                            <h6>Daren Axell</h6>
                            <p>29 August 2021</p>
                        </div>
                    </div>
                    <div className='client1'>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,”</p>
                        <div className='client-details1'>
                            <div className='frame'>
                                <img src={Frame} alt='frame' />
                            </div>
                            <h6>Dion Channing</h6>
                            <p>22 August 2021</p>
                        </div>
                    </div>
                </div>

            </div>
            <footer>
                <h2>We are open and accepting to all. Come work with us</h2>
                <p className='footer-text'>Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.</p>
                <button>Get Started</button>
                <div className='contact-details'>
                    <div className='left-col'>
                        <img src={Logo1} alt='logo1' />
                        <img src={Logo1} alt='logo1' />
                        <p>Turning Uncertainty Into Your Advantage</p>
                    </div>
                    <div className='right-col'>
                        <div className='resources'>
                            <h6>Resources</h6>
                            <p>Home</p>
                            <p>Articles</p>
                            <p>Vedios & Guides</p>
                            <p>About Us</p>
                        </div>
                        <div className='resources'>
                            <h6>Carrers</h6>
                            <p>Olevera academy</p>
                            <p>Privacy Policy</p>
                            <p>Cookies</p>
                        </div>
                        <div className='contact-info'>
                            <h6>Liability Limited By A Scheme<br /> Approved Under Professional<br /> Services Scheme</h6>
                            <p>Phone: (64) 09 973 4905 </p>
                            <p>Email: ezibuyenquiries@olveraadvisors.com </p>
                            <p>Website: olvera.co.nz/ezibuy</p>
                        </div>
                    </div>
                    <div className='copyrights'>
                        <div className='rights'>
                            <p>©2023 olevra advisors. All rights reserved</p>
                        </div>
                        <div className='rights'>
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Home