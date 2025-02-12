// style
import { useState } from "react";
import "./NewUserForm.css";
import { v4 as uuidv4 } from 'uuid'

function NewUserForm({ createUser }) {
  const [newUser, setNewuser] = useState(
    {
      image: '',
      firstName: '',
      lastName: '',
      age: 0,
      from: '',
      job: '',
      gender: '',
      id: uuidv4(),
    }
  )

  function addNewuserr(e) {
    e.preventDefault()
    createUser(newUser)
  }
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={addNewuserr}>
            <label>
              <span>Image URL:</span>
              <input required type="text" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, image: e.target.value}
                })
              }}/>
            </label>
            <label>
              <span>First Name:</span>
              <input required type="text" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, firstName: e.target.value}
                })
              }}/>
            </label>
            <label>
              <span>Last Name:</span>
              <input required type="text" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, lastName: e.target.value}
                })
              }} />
            </label>
            <label>
              <span>Age:</span>
              <input required type="number" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, age: e.target.value}
                })
              }} />
            </label>
            <label>
              <span>From:</span>
              <input required type="text" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, from: e.target.value}
                })
              }}/>
            </label>
            <label>
              <span>Job:</span>
              <input required type="text" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, job: e.target.value}
                })
              }} />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label>
                <span>Male</span>
                <input required  value='male' type="radio" name="gender" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, gender: e.target.value}
                })
              }}/>
              </label>
              <label>
                <span>Female</span>
                <input required  value='female' type="radio" name="gender" onChange={(e) => {
                setNewuser((prev) => {
                  return {...prev, gender: e.target.value}
                })
              }}/>
              </label>
            </div>
            <button type="submit" className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;
