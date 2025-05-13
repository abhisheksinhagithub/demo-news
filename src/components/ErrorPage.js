import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center my-2 mx-3 rounded" 
                 style={{ 
                     minHeight: '90vh', 
                     backgroundColor: '#182527',
                    //  backgroundColor: '#cdf3e5',
                    // backgroundColor: 'black',
                     color: 'white'
                 }}>
                <div className="text-center p-3 rounded" style={{ maxWidth: '600px'}}>
                    {/* Error Code */}
                    <h1 style={{ 
                        fontSize: '6rem', 
                        fontWeight: 'bold', 
                        color: '#20cd8d',
                        marginBottom: '0.5rem'
                    }}>
                        404
                    </h1>
                    
                    {/* Error Message */}
                    <h2 className="mb-4" style={{ color: '#20cd8d' }}>
                        Oops! Page Not Found
                    </h2>
                    
                    {/* Description */}
                    <p className="mb-5" style={{ fontSize: '1.2rem' }}>
                        The page you're looking for doesn't exist or has been moved. 
                        Please check the URL or navigate back to our homepage.
                    </p>
                    
                    {/* Illustration (using Remix Icon) */}
                    <div className="mb-5">
                        <i className="ri-error-warning-fill" 
                           style={{ 
                               fontSize: '6rem', 
                               color: '#20cd8d',
                               opacity: 0.7 
                           }}></i>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/" className="btn btn-lg" 
                              style={{ 
                                  backgroundColor: '#20cd8d',
                                  color: 'white'
                              }}>
                            <i className="ri-home-4-line me-2"></i>
                            Return Home
                        </Link>
                        
                        <Link to="/contact" className="btn btn-lg" 
                              style={{ 
                                  backgroundColor: 'transparent',
                                  color: '#20cd8d',
                                  border: '1px solid #20cd8d'
                              }}>
                            <i className="ri-customer-service-line me-2"></i>
                            Contact Support
                        </Link>
                    </div>
                    
                    {/* Search Option */}
                    <div className="mt-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <p className="mb-3">Or try searching for what you need:</p>
                        <div className="input-group">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Search articles..."
                                   style={{
                                       backgroundColor: '#2d4048',
                                       border: 'none',
                                       color: 'white'
                                   }} />
                            <button className="btn" 
                                    style={{ 
                                        backgroundColor: '#20cd8d',
                                        color: 'white'
                                    }}>
                                <i className="ri-search-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}