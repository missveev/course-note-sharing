import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import DashboardPage from '../Pages/UserPage/DashboardPage';
import ProfilePage from '../Pages/UserPage/ProfilePage';
import TablesPage from '../Pages/UserPage/TablesPage';
import MapsPage from '../Pages/UserPage/MapsPage';
import NotFoundPage from '../Pages/UserPage/NotFoundPage';
import CourseNote from "../Course/CourseNote";
class userRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<DashboardPage/>}/>
                    <Route path='/course-note' element={<CourseNote/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/tables' element={<TablesPage/>}/>
                    <Route path='/maps' element={<MapsPage/>}/>
                    <Route path='/404' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default userRoute;
