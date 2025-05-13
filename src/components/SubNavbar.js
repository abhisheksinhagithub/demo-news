import React, { Component } from 'react';

export default class SubNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Categories',
            showDropdown: null
        };
    }

    toggleDropdown = (dropdownName) => {
        this.setState(prevState => ({
            showDropdown: prevState.showDropdown === dropdownName ? null : dropdownName
        }));
    };

    render() {
        const { activeTab, showDropdown } = this.state;

        // Sample data for dropdowns
        const categories = ['Politics', 'Business', 'Technology', 'Science', 'Health', 'Sports', 'Entertainment', 'World'];
        const regions = ['Global', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Oceania'];
        const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Hindi', 'Arabic'];
        const filters = ['Latest', 'Popular', 'Featured', 'Verified Sources'];

        return (
            <nav className="subnavbar px-4" style={{ backgroundColor: '#1d2d31', color: 'white' }}>
                <div className="d-flex align-items-center justify-content-between w-100 py-2">
                    <div className="d-flex align-items-center gap-4">
                        {/* Categories */}
                        <div className="position-relative">
                            <button 
                                className={`btn btn-link p-0 border-0 text-white ${activeTab === 'Categories' ? 'fw-bold' : ''}`}
                                onClick={() => this.setState({ activeTab: 'Categories' })}
                                onMouseEnter={() => this.toggleDropdown('Categories')}
                            >
                                Categories
                            </button>
                            {showDropdown === 'Categories' && (
                                <div className="dropdown-menu show" style={{ backgroundColor: '#1d2d31' }}>
                                    {categories.map((category, index) => (
                                        <button key={index} className="dropdown-item text-white">
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Trending */}
                        <button 
                            className={`btn btn-link p-0 border-0 text-white ${activeTab === 'Trending' ? 'fw-bold' : ''}`}
                            onClick={() => this.setState({ activeTab: 'Trending' })}
                        >
                            Trending
                        </button>

                        {/* Region */}
                        <div className="position-relative">
                            <button 
                                className={`btn btn-link p-0 border-0 text-white ${activeTab === 'Region' ? 'fw-bold' : ''}`}
                                onClick={() => this.setState({ activeTab: 'Region' })}
                                onMouseEnter={() => this.toggleDropdown('Region')}
                            >
                                Region
                            </button>
                            {showDropdown === 'Region' && (
                                <div className="dropdown-menu show" style={{ backgroundColor: '#1d2d31' }}>
                                    {regions.map((region, index) => (
                                        <button key={index} className="dropdown-item text-white">
                                            {region}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Language */}
                        <div className="position-relative">
                            <button 
                                className={`btn btn-link p-0 border-0 text-white ${activeTab === 'Language' ? 'fw-bold' : ''}`}
                                onClick={() => this.setState({ activeTab: 'Language' })}
                                onMouseEnter={() => this.toggleDropdown('Language')}
                            >
                                Language
                            </button>
                            {showDropdown === 'Language' && (
                                <div className="dropdown-menu show" style={{ backgroundColor: '#1d2d31' }}>
                                    {languages.map((language, index) => (
                                        <button key={index} className="dropdown-item text-white">
                                            {language}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Filter */}
                        <div className="position-relative">
                            <button 
                                className={`btn btn-link p-0 border-0 text-white ${activeTab === 'Filter' ? 'fw-bold' : ''}`}
                                onClick={() => this.setState({ activeTab: 'Filter' })}
                                onMouseEnter={() => this.toggleDropdown('Filter')}
                            >
                                Filter
                            </button>
                            {showDropdown === 'Filter' && (
                                <div className="dropdown-menu show" style={{ backgroundColor: '#1d2d31' }}>
                                    {filters.map((filter, index) => (
                                        <button key={index} className="dropdown-item text-white">
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Saved Articles */}
                    <div>
                        <button className="btn btn-link p-0 border-0 text-white">
                            <i className="ri-bookmark-line me-2"></i>
                            Saved Articles
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}