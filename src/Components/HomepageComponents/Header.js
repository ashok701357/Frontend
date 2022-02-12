
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"30px", paddingRight:"60px"}}>
                <Link to="/"><a class="navbar-brand" href="#">Poll App</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                    <Link to="/"><li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li></Link>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Polls <span class="sr-only">(current)</span></a>
                        </li>
                        <Link to="/pollsHistory" ><li class="nav-item active">
                            <a class="nav-link" href="#">Polls History <span class="sr-only">(current)</span></a>
                        </li></Link>
                        <Link to="/Account" ><li class="nav-item active">
                            <a class="nav-link" href="#">Account <span class="sr-only">(current)</span></a>
                        </li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;

