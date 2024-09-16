import React from 'react'
import bitfulllogo from '../images/bitfulllogo.jpeg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar-maindiv'>
            <div className='navbar-logodiv'>
                <img src={bitfulllogo} />
            </div>
            <div className='navbar-linkdiv'>
                <ul>
                    <li><Link to="/StudentUI">Student</Link></li>
                    <li><Link to="/AlumniUI">Alumni</Link></li>
                    <li><Link to="/employerUI">Employer</Link></li>
                    <li><Link to="/parentsUI">Parents</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar