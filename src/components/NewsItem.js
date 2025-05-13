import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class NewsItem extends Component {
    render() {
        return (
            <>
            {/* <div className='d-flex gap-3 justify-content-between mx-3 flex-wrap my-2 py-2 px-2 rounded' style={{ backgroundColor:'#cdf3e5' }}> */}
            {/* <div className='d-flex gap-3 justify-content-between mx-3 flex-wrap my-2 py-2 px-2 rounded' style={{ backgroundColor:'#182527' }}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div> */}


            <div 
                    className='d-flex gap-3 flex-wrap mx-3 my-2 py-2 px-2 rounded' 
                    style={{ 
                        // backgroundColor: '#182527',
                        backgroundColor: '#cdf3e5',
                        maxHeight: '700px',  // Adjust height as needed
                        overflowY: 'auto',   // Enable vertical scroll
                        scrollbarWidth: 'thin',  // For Firefox
                        scrollbarColor: '#888 transparent'  // For Firefox
                    }}
                >
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>

                {/* Optional: Custom scrollbar styling (for Chrome/Safari) */}
                <style>{`
                    div::-webkit-scrollbar {
                        width: 8px;
                    }
                    div::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    div::-webkit-scrollbar-thumb {
                        background-color: #888;
                        border-radius: 4px;
                    }
                `}</style>
            </>
        )
    }
}
