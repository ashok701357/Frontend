const AdminPolls = () => {
    return(

        <div class="container-fluid">

            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"30px", paddingRight:"60px"}}>
                <a class="navbar-brand" href="#">Poll App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Users</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Polls</a>
                        </li>
                        
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div>
            <h3 style={{margin:"30px 0px"}}>List of Polls</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Poll Name</th>
              <th>Created By</th>
              <th>Created Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          <tr>
        <td>Technology</td>
        <td>Rahul</td>
        <td>10/02/2022</td>
        <td>
          <button style={{marginLeft:"10px"}} type="button">
            Delete
          </button>
        </td>
      </tr>
          </tbody>
        </table>
        </div>
        </div>
    );
}

export default AdminPolls;