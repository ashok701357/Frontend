import React from "react";
import '../HomepageComponents/Modal.css';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }} style={{color:"red", fontWeight:"bold"}}
          >
            X
          </button>
        </div>
        <div className="title">
          <h4>Enter The Poll Question and Options Below</h4>
        </div>
        <div className="body">
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
          <form>
            <input type="text" name="question" placeholder="Enter the Question" /><br />
            <input style={{marginTop:"10px"}} type="text" name="option1" placeholder="option 1" /><br />
            <input style={{marginTop:"10px"}} type="text" name="option2"  placeholder="option 2" /><br />
            <div class="dropdown" style={{marginTop:"10px"}}>
              <button style={{width:"100%"}} type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                Select Category
              </button>
              <ul class="dropdown-menu">
                
                <li><a class="dropdown-item" href="#">Sports</a></li>
                <li><a class="dropdown-item" href="#">Entertainment</a></li>
                <li><a class="dropdown-item" href="#">Technology</a></li>
              </ul>
            </div>
          
            <input type="submit" value="Add Poll" style={{width:"100%", backgroundColor:"green",marginTop:"10px"}} />
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;


// import React, { useState,Button,Modal, render } from "react";

// function AddPollModal() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//      <div>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
  
//  export default AddPollModal;