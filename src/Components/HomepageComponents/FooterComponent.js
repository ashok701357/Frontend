import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter, faHackerrank, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {

    return (
        <div style={{ backgroundColor: "blueviolet" }}>
            <footer class="page-footer font-small cyan darken-3" style={{padding:"30px 0px"}}>
                        <div class="col-md-12 py-1">
                            <div class="mb-5 flex-center">
                                <div className="home-icons" style={{ justifyContent: "space-between", justifyItems:"center", justifyContent:"center", textAlign:"center"}}>
                                    <span className="icon"> <a href="https://github.com/SohailKazi56" target="_blank" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faGithub} style={{ color: 'white', width: "40px", height: "40px", margin: "0px 30px" }} /> </a> </span>
                                    <span className="icon"> <a href="https://www.hackerrank.com/sohell356899" target="_blank" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faHackerrank} style={{ color: 'white', width: "40px", height: "40px", margin: "0px 30px" }} /> </a> </span>
                                    <span className="icon"> <a href="https://www.instagram.com/s_o_h_a_i_l__k_a_z_i" target="_blank" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', width: "40px", height: "40px", margin: "0px 30px" }} /> </a> </span>
                                    <span className="icon"> <a href="https://twitter.com/SohailK36568234?s=08" target="_blank" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', width: "40px", height: "40px", margin: "0px 30px" }} /> </a></span>
                                    <span className="icon"> <a href="https://www.linkedin.com/in/sohail-kazi-60010b198" target="_blank" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white', width: "40px", height: "40px", margin: "0px 30px" }} />  </a> </span>
                                </div>
                                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                            </div>
                </div>


            </footer>

        </div>
    );
}

export default FooterComponent;