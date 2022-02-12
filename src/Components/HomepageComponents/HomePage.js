import { useState } from 'react';
import Account from '../Account';
import VoteModal from '../VoteComponent';
import './AddPollModal';
import Modal from './AddPollModal';
import FooterComponent from './FooterComponent';
import Header from './Header';

const HomePage = () => {

    const [modalOpen, setModalOpen] = useState(false);
    // const [voteModalOpen, setVoteModalOpen] = useState(false);

    return (

        <div>
            
            <section className="d-flex justify-content-center" style={{ backgroundColor: "beige", height: "550px", width: "auto" }}>
                <div style={{ marginTop: "200px" }}>
                
                    <h1>
                        The Poll Center
                    </h1>
                    <button onClick={() => {
                        setModalOpen(true);
                    }} class="btn btn-primary" style={{ justifyContent: "center" }} >Create Poll</button>
                    {/* <button onClick={() => {
                        
                        setVoteModalOpen(true)
                    }} class="btn btn-primary" style={{ justifyContent: "center" }} >see Poll</button> */}
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    {/* {voteModalOpen && <VoteModal setVoteModalOpen={setVoteModalOpen} />} */}
                </div>
            </section>
            <section className="Top10Polls" style={{ backgroundColor: "grey", height: "auto", width: "auto" }}>
                <div style={{ padding: "20px" }}>
                    <h2 style={{ color: "white" }}>Top 10 Polls</h2>
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



        // <div className="container" style={{color:"beiger"}}>
        //     <section className="has-bg-img bg-purple bg-blend-screen createSectionPoll" style={{color:"grey"}}>
        //         <p>How do I make my Bootstrap website responsive? The first step is to set up a responsive Bootstrap properly. It can be done by simply putting the code in your web pages. The above code defines a meta tag that tells the browser to set the width of the website according to the device width. It also set scaling to 1 which equates to default website</p>
        //         <button>Create Poll</button>
        //     </section>
        // </div>

        // <div class="has-bg-img" style={{backgroundColor:"grey"}}>
        //    <section className="mainHomepageSection" style={{width:"auto", height:"600px" , backgroundColor:"beige"}}>
        //         <h3>How do I make my Bootstrap website responsive? The first step is to set up a responsive Bootstrap properly. It can be done by simply putting the code in your web pages. The above code defines a meta tag that tells the browser to set the width of the website according to the device width. It also set scaling to 1 which equates to default website</h3>
        //         <button style={{width:"140px"}}>Create Poll</button>
        //    </section>
        // </div>

        //    <div>
        //         <section style={{margin:"auto"}}>
        //         <main class="py-5 text-center container mains">
        //             <div class="row py-lg-5">
        //                 <div class="col-lg-6 col-md-8 mx-auto">
        //                     <h1 class="fw-light"><b>The Poll Center</b></h1>
        //                     <p class="lead"><b>Beyond the usual. Beyond the gimmicks and stunts. Beyond the games, is a
        //                         poll that dares the regular. That challenges the status quo. That defies the ordinary. A poll
        //                         that rest look up to.</b></p>
        //                         <br></br>
        //                         <button style={{width:"140px"}}>Create Poll</button>
        //                 </div>
        //             </div>
        //         </main>
        //     </section>
        //    </div>
        // <div>
        // <section class="header-section">
        //     <div class="center-div">
        //       <h1 class="font-weight-bold text-white"> <b>Beyond the usual. Beyond the gimmicks and stunts. Beyond the games, is a                        poll that dares the regular. That challenges the status quo. That defies the ordinary. A poll                      that rest look up to.</b></h1>
        //       <p>I want to create the world's Best Website..</p>
        //       <div class="header-buttons">
        //         <a  href="#">AboutUs</a>
        //         <a  href="#">Contact</a>
        //       </div> 
        //     </div>
        //   </section>
        // </div>
    );
}

export default HomePage;