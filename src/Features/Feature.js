import React from "react";
import {MDBRow, MDBCol, MDBIcon, MDBContainer} from "mdbreact";

const FeaturesPage = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Why is it so great?
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                Hundreds of thousands of students from around the world are already using JCNS to share their documents and improve their grades.
            </p>
            <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="university" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">10</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Universities
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="book" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">1000</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Courses Published
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="laptop-code" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">500</h5>
                    <p className="grey-text mb-md-0 mb-5">
                       Exam Questions
                    </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default FeaturesPage;