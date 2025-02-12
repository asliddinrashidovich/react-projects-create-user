// style
import './App.css'
import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userlist/UserList'
import NewUserForm from './components/newuser/NewUserForm'


function App() {
  const [showmodal, setShowmodal] = useState(false);
  const [user, setUser] = useState([])

  // create modal
  function createModal() {
    setShowmodal(true)
  }
  
  document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
      setShowmodal(false)
    }
  })

  // add user list
  function createUserFunc(val) {
    setUser((prev) => {
      return [...prev, val]
    })
    setShowmodal(false)
  }

  // close overlay
  function closeoverlay(e) {
    if(e.target.classList.contains('overlay')) {
      setShowmodal(false)
    } 
  }

  // delete user
  function deleteUser(id) {
    setUser((prev)=> {
      return prev.filter( user => {
        return user.id != id
      })
    })
  }

  return (
    <div className="App" onClick={closeoverlay}>
      <Navbar numberUsers={user.length}/>
      <main>
        {!user.length && <span className='no-users'>No User</span>}
        <UserList data={user} deleteUser={deleteUser}/>
        {showmodal && <NewUserForm createUser={createUserFunc}/>}
      </main>
      <Footer/>
      <button className='create-user' onClick={createModal}>Create user</button>
    </div>
  )
}

export default App
