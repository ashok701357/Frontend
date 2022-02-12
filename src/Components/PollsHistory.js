import FooterComponent from "./HomepageComponents/FooterComponent";
import Header from "./HomepageComponents/Header";

const PollsHistory = () => {
    return (

        <div class="container-fluid" style={{padding:"0px", margin:"0px"}}>
            
            <section className="Top10Polls" style={{ backgroundColor: "grey", height: "auto", width: "auto" }}>
                <div style={{ padding: "20px" }}>
                    <h2 style={{ color: "white" }}>Polls history</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Poll Name</th>
                                <th scope="col">Created By</th>
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
        </div>

    );

}

export default PollsHistory;