// style
import './Navbar.css'

function Navbar({numberUsers}) {
  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className='navbar-counter'>{numberUsers ? `You have ${numberUsers}`   : 'No user yet :('}</h3>
      </div>
    </div>
  )
}

export default Navbar