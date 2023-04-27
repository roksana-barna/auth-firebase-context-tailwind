import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
  <Link to='/'className="btn btn-ghost normal-case text-xl">Home</Link>

<Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
<Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
<Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>
{
    user ? <>
    <span>{user.email}</span> 
    <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
    </>:<Link to="/login">Login</Link>
    
   
}

</div>
        </div>
    );
};

export default Header;