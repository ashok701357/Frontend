import { useState } from "react";
import HomePage from "./HomepageComponents/HomePage";

import {Link} from "react-router-dom";
const LoginPage = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (


        <section class="container-fluid">
            <section class="row justify-content-center">
                <section class="col-12 col-sm-6 col-md-3">
                    <form class="form-container" style={{
                        background: "#fff",
                        padding: "30px",}}>
                    <div class="form-group">
                        <label for="exampleInputusername">User Name</label>

                        <input type="UserName" class="form-control" id="inputusername" placeholder="Enter your Name" required="" /></div>
                        <br />
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>

                        <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your mail" required="" />
                        <br />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>

                        <input type="password" class="form-control" id="inputPassword4" placeholder="Enter your password" required="" />
                        <br />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div><br />
                    <Link to="/"><button  class="btn btn-primary btn-block"> Sign In</button></Link><br /><br />
                    <button type="Signin" class="btn btn-primary btn-block">Sign In As Admin</button>
                </form>

            </section>
        </section>
        </section >

    );
}

export default LoginPage;