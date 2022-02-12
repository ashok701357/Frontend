const Account = () => {
    return(
        <div class="container">
      <div class="row">
          <div class= "col align-items-center d-flex justify-content-center">
    <div class="card align-items-center d-flex justify-content-center" >
        {/* <img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image cap" style="width: 20rem;" object-fit: "cover"; /> */}
        <div class="card-body">
          <h5 class="card-title ">Joe M</h5>
          <p class="card-text">Your details are here!</p>
        </div>
        <ul class="list-group list-group-flush ">
          <li class="list-group-item">Name: Joe M</li>
          <li class="list-group-item">Email: givenaddress@ex.com</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Create New Poll</a>
          <a href="#" class="card-link">Participate in a new Poll</a>
          <a href="#" class="card-link">Poll History</a>
        </div>
      </div>
    </div>
</div>
</div>
    );

}

export default Account;
