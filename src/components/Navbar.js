import React, { Component } from 'react';
import logo from '../assets/logo.png';
import SubNavbar from './SubNavbar';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
            currentDate: this.getFormattedDate(),
            activeSubmenu: null
        };
    }

    getFormattedDate() {
        return new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    componentDidMount() {
        // Update time every second
        this.interval = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),

                // Only update date if day has changed
                currentDate: this.state.currentDate !== this.getFormattedDate()
                    ? this.getFormattedDate()
                    : this.state.currentDate
            });

        }, 1000);

    }

    componentWillUnmount() {
        // Clear interval when component unmounts
        clearInterval(this.interval);
    }


    render() {
        return (
            <>
            <nav className="navbar px-4" style={{ backgroundColor: '#182527' }}>
                <div className='d-flex align-items-center justify-content-between w-100 text-white'>

                    <div className='d-flex align-items-center gap-5'>
                        <div className="d-flex flex-column align-items-center">
                            <img src={logo} alt="Logo" width="40" />
                            <span style={{ fontSize: '10px' }}>Daily Scope</span>
                        </div>

                        <div className="d-flex gap-2">
                            <div>Home</div>
                            <div>About</div>
                            <div>Contact</div>
                        </div>
                    </div>

                    <div className='d-flex align-items-center rounded-pill' style={{ backgroundColor: '#1dcd8d', height: '35px' }}>
                        <input
                            type="text"
                            className="form-control border-0 bg-transparent text-white custom-textarea"
                            placeholder="Search for news, topics, or journalists..."
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                transition: 'border-color 0.15s ease-in-out',
                                width: '300px'
                            }}
                        />

                        <button type='button' className='btn border-0 px-2'>
                            <i className="ri-close-large-fill" style={{ color: 'white' }}></i>
                        </button>

                        <button type='button' className='btn border-0 px-2'>
                            <i className="ri-mic-off-line" style={{ color: 'white' }}></i>
                        </button>

                        <button type="button" className="btn btn-dark btn-sm px-3 rounded-end-pill border-0" style={{ height: '35px', backgroundColor: '#2d4048' }}>search</button>
                    </div>

                    <div className='d-flex gap-5'>
                        <div className='d-flex align-items-center gap-3'>
                            <div>
                                {this.state.currentTime}
                            </div>


                            <div className="d-flex align-items-center gap-1">
                                <i className="ri-cloud-line"></i>
                                32°C Delhi
                            </div>

                            <div>
                                {this.state.currentDate}
                            </div>
                        </div>

                        <div className='d-flex gap-1 align-items-center position-relative'>
                            <i className="ri-flag-fill" style={{ color: 'white' }}></i>

                            <div className="profile-dropdown">
                                <button
                                    type='button'
                                    className='btn border-0 profile-button'
                                    onMouseEnter={() => this.setState({ activeSubmenu: null })}
                                >
                                    <i className="ri-account-box-fill" style={{ color: 'white' }}></i>
                                </button>

                                <div className="dropdown-content">
                                    {/* My Profile Section */}
                                    <div className="dropdown-item-container">
                                        <div className="dropdown-item"
                                            onMouseEnter={() => this.setState({ activeSubmenu: 'profile' })}
                                        >
                                            <i className="ri-user-line dropdown-icon"></i>
                                            My Profile
                                            <i className="ri-arrow-right-s-line float-end"></i>
                                        </div>

                                        {this.state.activeSubmenu === 'profile' && (
                                            <div className="submenu">
                                                <div className="dropdown-item">
                                                    <i className="ri-eye-line dropdown-icon"></i>
                                                    View Profile
                                                </div>
                                                <div className="dropdown-item">
                                                    <i className="ri-edit-line dropdown-icon"></i>
                                                    Edit Profile
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ borderTop: '1px solid #3d5158' }}></div>

                                    {/* Settings Section */}
                                    <div className="dropdown-item-container">
                                        <div className="dropdown-item"
                                            onMouseEnter={() => this.setState({ activeSubmenu: 'settings' })}
                                        >
                                            <i className="ri-settings-3-line dropdown-icon"></i>
                                            Settings
                                            <i className="ri-arrow-right-s-line float-end"></i>
                                        </div>

                                        {this.state.activeSubmenu === 'settings' && (
                                            <div className="submenu">
                                                <div className="dropdown-item">
                                                    <i className="ri-lock-line dropdown-icon"></i>
                                                    Change Password
                                                </div>
                                                <div className="dropdown-item">
                                                    <i className="ri-notification-line dropdown-icon"></i>
                                                    Notifications
                                                </div>
                                                <div className="dropdown-item">
                                                    <i className="ri-palette-line dropdown-icon"></i>
                                                    Theme
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ borderTop: '1px solid #3d5158' }}></div>

                                    {/* Saved Articles - No submenu */}
                                    <div className="dropdown-item">
                                        <i className="ri-bookmark-line dropdown-icon"></i>
                                        Saved Articles
                                    </div>

                                    <div style={{ borderTop: '1px solid #3d5158' }}></div>

                                    {/* Logout - No submenu */}
                                    <div className="dropdown-item">
                                        <i className="ri-logout-box-line dropdown-icon"></i>
                                        Logout
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </nav >

            <SubNavbar/>
            </>
        );
    }
}