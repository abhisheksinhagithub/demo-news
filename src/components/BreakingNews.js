import React, { Component } from 'react';

class BreakingNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItems: [
                { id: 1, title: "Major economic summit concludes with new trade agreements", category: "Politics" },
                { id: 2, title: "Scientists discover new species in Amazon rainforest", category: "Science" },
                { id: 3, title: "Stock markets reach all-time high amid positive forecasts", category: "Finance" },
                { id: 4, title: "National team advances to world cup finals", category: "Sports" }
            ],
            currentIndex: 0
    };
  }

componentDidMount() {
    this.interval = setInterval(() => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.newsItems.length
        }));
    }, 5000); // Rotate every 5 seconds
}

componentWillUnmount() {
    clearInterval(this.interval);
}

render() {
    return (
        <div className="breaking-news-container mx-3 my-2">
            <div className="breaking-news-label">
                <span className="breaking-news-badge">BREAKING</span>
                <i className="ri-alert-fill"></i>
            </div>
            <div className="breaking-news-content">
                <div className="scrolling-ticker">
                    {this.state.newsItems.map(item => (
                        <span key={item.id} className="news-item">
                            <span className="news-category">{item.category}</span>
                            <span className="news-title">{item.title}</span>
                            &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
}

export default BreakingNews;