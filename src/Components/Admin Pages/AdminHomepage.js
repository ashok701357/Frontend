import EditableRow from "../EditableRow";
import ReadOnlyRow from "../ReadOnlyRow";
import { useState } from "react";
import { Fragment, default as React } from 'react'
import data from "./mock-data.json";
import {nanoid} from "nanoid";
const AdminHomePage = ()  => {
    const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
        
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div>

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

    
    <div style={{padding:"10px"}} className="app-container">
      <form  onSubmit={handleEditFormSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a User</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
          
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
          style={{marginLeft:"10px"}}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
          style={{marginLeft:"10px"}}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
          style={{marginLeft:"10px"}}
        /><br/>
        <button class="btn btn-primary" type="submit" style={{marginTop:"20px", width:"120px"}}>Add</button>
      </form>
    </div>

    </div>
  );
}

export default AdminHomePage;