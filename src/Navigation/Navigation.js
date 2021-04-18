import React from 'react';
import {Link } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBFormInline,
    MDBAnimation
} from 'mdbreact';
import './Navigation.css';

class Navigation extends React.Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapseID } = this.state;
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div id='classicformpage'>

                    <div>
                        <MDBNavbar
                            dark
                            expand='md'
                            scrolling
                            fixed='top'
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'>JCNS</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler
                                    onClick={this.toggleCollapse('navbarCollapse')}
                                />
                                <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <Link to='#!'>Home</Link>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <Link to='/#category'>Categories</Link>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <Link to='#!'>Courses</Link>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <Link to='#!'>About</Link>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                                <div className='md-form my-0'>
                                                    <input
                                                        className='form-control mr-sm-2'
                                                        type='text'
                                                        placeholder='Search'
                                                        aria-label='Search'
                                                    />
                                                </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {collapseID && overlay}
                    </div>


                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='mt-5  d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <MDBAnimation
                                type='fadeInLeft'
                                delay='.3s'
                                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
                            >
                                <h1 className='h1-responsive font-weight-bold'>
                                    Find your study resources
                                </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4'>
                                    The best documents shared by your fellow students, organized in one place.<br/>
                                    Hundreds of thousands of students from around the world are already using our CNS to share their documents and improve their grades.
                                </h6>
                                <MDBBtn outline color='white'>
                                    Get Started
                                </MDBBtn>
                            </MDBAnimation>

                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBAnimation type='fadeInRight' delay='.3s'>
                                    <MDBCard id='classic-card'>
                                        <MDBCardBody className='white-text'>
                                            <h3 className='text-center'>
                                                <MDBIcon icon='user' /> Register:
                                            </h3>
                                            <hr className='hr-light' />
                                            <MDBInput
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Your name'
                                                icon='user'
                                                containerClass="text-left"
                                            />
                                            <MDBInput
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Your email'
                                                icon='envelope'
                                                containerClass="text-left"
                                            />
                                            <MDBInput
                                                className='white-text'
                                                iconClass='white-text'
                                                label='Your password'
                                                icon='lock'
                                                containerClass="text-left"
                                                type='password'
                                            />
                                            <div className='text-center mt-4 black-text'>
                                                <MDBBtn color='indigo'>Sign Up</MDBBtn>
                                                <hr className='hr-light' />
                                                <div className='text-center d-flex justify-content-center white-label'>
                                                    <a href='#!' className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='twitter'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                    <a href='#!' className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='linkedin'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                    <a href='#!' className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='instagram'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Navigation;