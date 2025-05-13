import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="mt-5" style={{ backgroundColor: '#182527', color: 'white' }}>
                <div className="container py-5">
                    <div className="row">
                        {/* About Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="mb-3" style={{ color: '#20cd8d' }}>Daily Scope</h5>
                            <p style={{ fontSize: '0.9rem' }}>
                                Your trusted source for the latest news and updates from around the world. 
                                We bring you accurate, timely, and comprehensive coverage across all categories.
                            </p>
                            <div className="d-flex gap-3 mt-3">
                                <a href="#" className="text-white">
                                    <i className="ri-facebook-fill" style={{ fontSize: '1.2rem' }}></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="ri-twitter-fill" style={{ fontSize: '1.2rem' }}></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="ri-instagram-fill" style={{ fontSize: '1.2rem' }}></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="ri-linkedin-fill" style={{ fontSize: '1.2rem' }}></i>
                                </a>
                                <a href="#" className="text-white">
                                    <i className="ri-youtube-fill" style={{ fontSize: '1.2rem' }}></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-2 mb-4">
                            <h5 className="mb-3" style={{ color: '#20cd8d' }}>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Advertise</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Careers</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="col-md-3 mb-4">
                            <h5 className="mb-3" style={{ color: '#20cd8d' }}>Categories</h5>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Politics</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Business</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Technology</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Science</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Health</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Sports</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">Entertainment</a></li>
                                        <li className="mb-2"><a href="#" className="text-white text-decoration-none">World</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-3 mb-4">
                            <h5 className="mb-3" style={{ color: '#20cd8d' }}>Newsletter</h5>
                            <p style={{ fontSize: '0.9rem' }}>
                                Subscribe to our newsletter to get daily updates on news that matters to you.
                            </p>
                            <form className="mt-3">
                                <div className="input-group mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Your email" 
                                        style={{ 
                                            backgroundColor: '#2d4048', 
                                            border: 'none', 
                                            color: 'white' 
                                        }}
                                    />
                                    <button 
                                        className="btn" 
                                        type="submit"
                                        style={{ 
                                            backgroundColor: '#20cd8d', 
                                            color: 'white' 
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <div className="d-flex align-items-center gap-2 mt-3">
                                <i className="ri-phone-fill" style={{ color: '#20cd8d' }}></i>
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 mt-2">
                                <i className="ri-mail-fill" style={{ color: '#20cd8d' }}></i>
                                <span>contact@dailyscope.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row pt-4 border-top" style={{ borderColor: '#2d4048 !important' }}>
                        <div className="col-12 text-center">
                            <p className="mb-0" style={{ fontSize: '0.8rem' }}>
                                &copy; {new Date().getFullYear()} Daily Scope. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}