import React, {Component} from "react";
import userRoute from '../../userComponent/UserRoute'
import CourseNav from "../../userComponent/topNav";
import SideNav from "../../userComponent/SideNav";
import FooterPagePro from "../../Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./DashboardPage";
import CourseNote from "../../Course/CourseNote";

class UserPage extends Component {

    render() {
        return (
            <div className="flexible-content">
                <CourseNav/>
                <SideNav/>
                <Routes>
                    <Route path='/' exact element={<DashboardPage/>}/>
                    <Route path='/course-note' element={<CourseNote/>}/>
                </Routes>
                <FooterPagePro />
            </div>
        );
    }
}

export default UserPage;
