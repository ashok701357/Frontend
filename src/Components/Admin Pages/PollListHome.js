import FooterComponent from "../HomepageComponents/FooterComponent";
import Header from "../HomepageComponents/Header";
import TableComponent from "../TableComponent";
import AddUser from "./AddUser";
import  "./list.css";
const PollListHome = () => {
    return(

        <div class="container-fluid">
            <section>
                <Header />
            </section>
            <section>
            <button type="button" class="btn btn-success" onClick={AddUser}>Create Poll</button>
            </section>
            <section>
            <div class="container">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Polls</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Abc</td>
            <td>  
             
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Def</td>
            <td>
             
           
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i>Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ghi</td>
            
            <td>
             
           
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
            </section>

            <section>
                <FooterComponent />
            </section>
        </div>

    );
}

export default PollListHome;