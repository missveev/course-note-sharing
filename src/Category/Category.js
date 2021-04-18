import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer
} from
        'mdbreact';
import './Category.css';
const CategoryPage = () => {
    return (
        <section className="text-center " id="category">
            <h2 className="white-text h2-responsive font-weight-bold pt-5">
                CATEGORIES
            </h2>
            <p className="white-text w-responsive mx-auto">
                We've got the best study resources for you.
            </p>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='3' className="mb-4">
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='atom' /> <br/> Earth Science
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='hard-hat' /> <br/> Engineering
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='flask' /><br/> Health Science
                                    </h5>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='hands-helping' /> <br/>Humanity
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='gavel' /> <br/> Law
                                    </h5>
                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='chart-pie' /> <br/>Management
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='clinic-medical' /><br/> Medicine
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='3'>
                        <MDBCard
                            className='card-image'
                            style={{
                                backgroundImage:
                                    "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                            }}
                        >
                            <div className='text-white text-center  align-items-center rgba-black-strong py-5 px-4'>
                                <div>
                                    <h5 className='white-text'>
                                        <MDBIcon icon='chart-pie' /> <br/> Social Studies
                                    </h5>

                                </div>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" className="text-center py-4">
                        <MDBBtn outline color="white"><strong>more</strong></MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default CategoryPage;