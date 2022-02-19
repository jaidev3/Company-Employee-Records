import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
<>
<div className="navbar">
<Link to="/"><h3>Home</h3></Link>
<Link to="list"><h3>List</h3></Link>
<Link to="login"><h3>Login</h3></Link>
</div>

</>
        

    )
}

export default Navbar;