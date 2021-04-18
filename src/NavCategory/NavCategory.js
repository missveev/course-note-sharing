import React from "react";
import {MDBRow, MDBCol,  MDBBtn, MDBContainer} from "mdbreact";

const NavCategory = () => {
    const newsStyle = {
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "1.5rem"
    };
    return (
        <section className="my-5" id='navcategory'>
            <h5 className="h1-responsive font-weight-bold text-center my-5">
                Everything you need to improve your grades
            </h5>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3" className="md-0">
                        <MDBRow>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="font-weight-bold">
                                        Most Popular Universities
                                    </a>
                                </MDBCol>

                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Eastern Mediterranean University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Girne American University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between  mb-4">
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>

                        </MDBRow></MDBCol>

                    <MDBCol md="3" className="md-0 ">
                        <MDBRow>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="font-weight-bold">
                                        Most Popular Courses
                                    </a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Eastern Mediterranean University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Girne American University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between  mb-4">
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>

                        </MDBRow></MDBCol>

                    <MDBCol md="3" className="md-0 ">
                        <MDBRow>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="font-weight-bold">
                                        Most Popular Documents
                                    </a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Eastern Mediterranean University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Girne American University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between  mb-4">
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>

                        </MDBRow></MDBCol>
                    <MDBCol md="3" className="md-0 ">
                        <MDBRow>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="font-weight-bold">
                                        Popular videos
                                    </a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Eastern Mediterranean University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between" style={newsStyle}>
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Girne American University</a>
                                </MDBCol>
                            </div>
                            <div className="d-flex justify-content-between  mb-4">
                                <MDBCol size="15" className="text pl-0 mb-3">
                                    <a href="#!" className="dark-grey-text">Cyprus International University</a>
                                </MDBCol>
                            </div>

                        </MDBRow></MDBCol>
                    <MDBCol md="12" className="text-center py-2">
                        <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default NavCategory;