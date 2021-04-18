import React, {useEffect, useState} from 'react'
import CourseNav from "../userComponent/topNav";
import SideNavPage from "../userComponent/SideNav";
import FooterPagePro from "../Footer/Footer";
import {MDBContainer} from "mdbreact";
import CourseData from "../data/CourseData";

const CourseNote = () => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        setCollections(CourseData);
    }, [])
    return (
        <section id="coursenote">
            <MDBContainer>
                {
                    collections.map(({id, CourseName, university, CourseCode}) => (
                        <div key={id}>
                            <h1>{CourseName}{CourseCode}</h1>
                            <h4>University: {university}</h4>
                        </div>
                    ))
                }
            </MDBContainer>
        </section>

    );
}
export default CourseNote;