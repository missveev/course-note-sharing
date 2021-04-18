import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
    return (
        <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
            <div style={{ backgroundColor: "#424f95" }}>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow className="py-4 d-flex align-items-center">
                        <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">
                                Get connected with us on social networks!
                            </h6>
                        </MDBCol>
                        <MDBCol md="6" lg="7" className="text-center text-md-right">
                            <a className="fb-ic ml-0">
                                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-lg-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text mr-lg-4"> </i>
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>JCNS</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            JCNS is an open courseware sharing site that provides students, educators and researchers free lecture notes and course notes.
                        </p>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Useful Link</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <a href="#!">Your Account</a>
                        </p>
                        <p>
                            <a href="#!">Notes</a>
                        </p>
                        <p>
                            <a href="#!">About us</a>
                        </p>
                        <p>
                            <a href="#!">Academic Integrity</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>SUPPORT</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <a href="#!">FAQ</a>
                        </p>
                        <p>
                            <a href="#!">Documentation</a>
                        </p>
                        <p>
                            <a href="#!">Community</a>
                        </p>
                        <p>
                            <a href="#!">Management</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Contact</strong>
                        </h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <i className="fa fa-home mr-3" /> Lefkosa, North Cyprus
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> jcns@example.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> + 90 234 567 88
                        </p>
                        <p>
                            <i className="fa fa-print mr-3" /> + 90 234 567 89
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: MISS VEEV &amp; EXE
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPagePro;