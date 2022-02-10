import React from "react";
import './HomepageComponents/Modal.css';

function VoteModal({ setVoteModalopen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setVoteModalopen(false);
            }} style={{color:"red", fontWeight:"bold"}}
          >
            X
          </button>
        </div>
        <div className="title">
          <h4>Which Technology is better React or Angular ?</h4>
        </div>
        <div className="body">
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
          
          
        </div>
        
             <button class="btn btn-secondary" style={{margin:"15px 0px"}} >
                    Angular
             </button>
             <button class="btn btn-primary">
               React
             </button>
             <button class="btn btn-danger" style={{margin:"15px 0px"}}>
               Report this Poll
             </button>
        
      </div>
    </div>
  );
}

export default VoteModal;

