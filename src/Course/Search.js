import React from "react";
import {MDBBtn, MDBCardBody, MDBAlert, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import './searchpage.css';

const SearchPage = () => {
    return (
        <div className='content'>

            <MDBCol>
                <div className="input-group md-form form-sm form-1 pl-0">

                    <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
                    <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search"/>
          </span>
                    </div>
                </div>

            </MDBCol>
            <div className='innercontent'>
                <div>
                    <h5>My Courses and Books</h5></div>

                <MDBAlert color="secondary">You are not following any courses or books yet. Use the search bar to find
                    your courses and books and follow them.</MDBAlert>
                <MDBBtn outline color="primary" size="sm">Add Courses and Books</MDBBtn>
                <h5>My Recent Documents</h5>
                <h5>Recommendations</h5>
            </div>
        </div>
    );
}

export default SearchPage;