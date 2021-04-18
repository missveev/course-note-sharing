import React from "react";
import '../Course/SideNav.css';
import {Link} from 'react-router-dom'


const SideNav = ({match}) => (
    <div className="sidebar">
        <Link to="/user">Dashboard</Link>
        <Link to="course-note">Courses</Link>
        <Link to="books">Books</Link>
        <Link to="study-lists">Studylists</Link>
        <Link to="documents">Recent Document</Link>
        <Link to="upload">Uploads</Link>
    </div>);
export default SideNav;