import Header from "../HomepageComponents/Header";
import FooterComponent from "../HomepageComponents/FooterComponent";
const AddUser = () => {
    return(
        <div>
        <section>
            <Header />
        </section>
        <section><div class="d-flex justify-content-center">
            </div><div class="col-md-6 offset-md-3 bg">
                <div class="d-flex justify-content-center">
                    <h2>Add User</h2>
                </div>  </div><form><div class="form-group row">
                    <label for="fullname" class="col-sm-2 col-form-label">Full Name</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="fullname" placeholder="Full name" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="mob" class="col-sm-2 col-form-label">Mobile number</label>
                    <div class="col-sm-10">
                        <input type="numbers" readonly class="form-control-plaintext" id="mob" placeholder="Mobile number" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="Email" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="username" placeholder="Username" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Add User</button>
            </form>
            </section>
            <div>
            <section>
                <FooterComponent />
            </section>
            </div>
            </div>
        );
    }
    
    export default AddUser;