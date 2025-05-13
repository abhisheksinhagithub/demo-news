import React, { Component } from 'react'

export default class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            disliked: false,
            showComments: false,
            comments: [],
            newComment: ''
        };
    }

    formatDate(pubDate) {
        const date = new Date(pubDate);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    handleLike = () => {
        this.setState(prevState => ({
            liked: !prevState.liked,
            disliked: false // Ensure only one can be active at a time
        }));
        // Here you can add API call or other logic for liking
    };

    handleDislike = () => {
        this.setState(prevState => ({
            disliked: !prevState.disliked,
            liked: false // Ensure only one can be active at a time
        }));
        // Here you can add API call or other logic for disliking
    };

    toggleComments = () => {
        this.setState(prevState => ({
            showComments: !prevState.showComments
        }));
    };

    handleCommentChange = (e) => {
        this.setState({ newComment: e.target.value });
    };

    handleCommentSubmit = (e) => {
        e.preventDefault();
        if (this.state.newComment.trim()) {
            this.setState(prevState => ({
                comments: [...prevState.comments, prevState.newComment],
                newComment: ''
            }));
            // Here you can add API call to save the comment
        }
    };

    render() {
        const sourceName = "BBC News";
        const sourceUrl = "https://www.tv9hindi.com";
        const sourceIconUrl = "https://i.bytvi.com/domain_icons/tv9bharatvarsh.png";
        const pubDate = "2025-05-10 22:40:50";
        const pubDateTZ = "UTC";
        const creator = ["Anshu Pareek"]; // Array of creators
        
        return (
            <>
                <div className=''>
                    <div className="card position-relative" style={{ width: '16rem', backgroundColor:'#2d4048', color:'white' }}>
                    {/* <div className="card position-relative" style={{ width: '16rem', backgroundColor:'black', color:'white' }}> */}
                        {/* Bookmark Icon */}
                        <div className="position-absolute top-0 end-0 ">
                            <i className="ri-bookmark-fill" style={{ fontSize: '1.5rem', color: 'yellow' }}></i>
                        </div>
                        
                        <img src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{color:'#20cd8d'}}>Title - hey can't come</h5>

                            {/* Author/Creator */}
                            {creator && creator.length > 0 && (
                                <div className="mb-1" style={{ fontSize: '12px', color: 'red' }}>
                                    <i className="ri-user-3-line me-1"></i>
                                    {creator.join(', ')}
                                </div>
                            )}

                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <a 
                                        href={sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-1 py-1 rounded bg-primary text-white text-decoration-none" 
                                        style={{fontSize:'12px'}}
                                    >
                                        {sourceName}
                                    </a>
                                    <a 
                                        href={sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="source-icon-wrapper" 
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'white',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <img 
                                            src={sourceIconUrl} 
                                            alt="Source" 
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain'
                                            }}
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' font-size='20' dy='.3em' text-anchor='middle' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E"
                                            }}
                                        />
                                    </a>
                                </div>
                                <small style={{fontSize: '10px', color:"yellow"}}>
                                    {this.formatDate(pubDate)} {pubDateTZ}
                                </small>
                            </div>

                            <p className="card-text">Descriptions - Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                            {/* Like/Dislike buttons */}
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex gap-2">
                                    <button 
                                        onClick={this.handleLike}
                                        className="btn btn-sm p-0"
                                        style={{color: this.state.liked ? '#20cd8d' : 'white'}}
                                    >
                                        <i className="ri-thumb-up-fill"></i> Like
                                    </button>
                                    <button 
                                        onClick={this.handleDislike}
                                        className="btn btn-sm p-0"
                                        style={{color: this.state.disliked ? 'red' : 'white'}}
                                    >
                                        <i className="ri-thumb-down-fill"></i> Dislike
                                    </button>
                                </div>
                                <button 
                                    onClick={this.toggleComments}
                                    className="btn btn-sm p-0 text-info"
                                >
                                    <i className="ri-chat-3-fill"></i> Comments
                                </button>
                            </div>
                            
                            {/* Comment section */}
                            {this.state.showComments && (
                                <div className="mt-2" style={{borderTop: '1px solid #444', paddingTop: '10px'}}>
                                    <div className="mb-2">
                                        {this.state.comments.length > 0 ? (
                                            this.state.comments.map((comment, index) => (
                                                <div key={index} className="mb-1 p-1" style={{background: '#3a4d55', borderRadius: '4px'}}>
                                                    <small>{comment}</small>
                                                </div>
                                            ))
                                        ) : (
                                            <small className="text-muted">No comments yet</small>
                                        )}
                                    </div>
                                    <form onSubmit={this.handleCommentSubmit} className="d-flex gap-1">
                                        <input
                                            type="text"
                                            value={this.state.newComment}
                                            onChange={this.handleCommentChange}
                                            className="form-control form-control-sm"
                                            placeholder="Add a comment..."
                                            style={{background: '#3a4d55', color: 'white', border: 'none'}}
                                        />
                                        <button type="submit" className="btn btn-sm btn-success">
                                            <i className="ri-send-plane-fill"></i>
                                        </button>
                                    </form>
                                </div>
                            )}
                            
                            <div className='d-flex gap-1 mt-2'>
                                <a href="#" className="btn btn-sm btn-success" style={{fontSize:'10px'}}>Read More</a>
                                <span href="#" className="btn btn-sm btn-success" style={{fontSize:'10px'}}>Read Aloud</span>
                                <span href="#" className="btn btn-sm btn-success" style={{fontSize:'10px'}}>share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


// import React, { Component } from 'react'

// export default class NewsCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             liked: false,
//             disliked: false,
//             showComments: false,
//             comments: [],
//             newComment: '',
//             bookmarked: false,
//             shareOptionsVisible: false
//         };
//     }

//     formatDate(pubDate) {
//         const date = new Date(pubDate);
//         return date.toLocaleString('en-US', {
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//         });
//     }

//     handleLike = () => {
//         this.setState(prevState => ({
//             liked: !prevState.liked,
//             disliked: false
//         }));
//     };

//     handleDislike = () => {
//         this.setState(prevState => ({
//             disliked: !prevState.disliked,
//             liked: false
//         }));
//     };

//     toggleBookmark = () => {
//         this.setState(prevState => ({
//             bookmarked: !prevState.bookmarked
//         }));
//     };

//     toggleComments = () => {
//         this.setState(prevState => ({
//             showComments: !prevState.showComments
//         }));
//     };

//     toggleShareOptions = () => {
//         this.setState(prevState => ({
//             shareOptionsVisible: !prevState.shareOptionsVisible
//         }));
//     };

//     handleCommentChange = (e) => {
//         this.setState({ newComment: e.target.value });
//     };

//     handleCommentSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.newComment.trim()) {
//             this.setState(prevState => ({
//                 comments: [...prevState.comments, {
//                     text: prevState.newComment,
//                     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//                 }],
//                 newComment: ''
//             }));
//         }
//     };

//     render() {
//         const sourceName = "BBC News";
//         const sourceUrl = "https://www.tv9hindi.com";
//         const sourceIconUrl = "https://i.bytvi.com/domain_icons/tv9bharatvarsh.png";
//         const pubDate = "2025-05-10 22:40:50";
//         const pubDateTZ = "UTC";
//         const creator = ["Anshu Pareek"];
        
//         return (
//             <div className='news-card-container'>
//                 <div className="card position-relative" style={{ 
//                     width: '18rem', 
//                     backgroundColor:'#2d4048', 
//                     color:'white',
//                     borderRadius: '12px',
//                     boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//                     transition: 'transform 0.2s',
//                     border: 'none'
//                 }}>
//                     {/* Bookmark Icon */}
//                     <div 
//                         className="position-absolute top-0 end-0 p-2"
//                         onClick={this.toggleBookmark}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <i 
//                             className={this.state.bookmarked ? "ri-bookmark-fill" : "ri-bookmark-line"} 
//                             style={{ 
//                                 fontSize: '1.5rem', 
//                                 color: this.state.bookmarked ? '#20cd8d' : 'rgba(255,255,255,0.7)',
//                                 transition: 'all 0.2s'
//                             }}
//                         ></i>
//                     </div>
                    
//                     <img 
//                         src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                         className="card-img-top" 
//                         alt="..." 
//                         style={{
//                             borderTopLeftRadius: '12px',
//                             borderTopRightRadius: '12px',
//                             height: '160px',
//                             objectFit: 'cover'
//                         }}
//                     />
                    
//                     <div className="card-body" style={{ padding: '1rem' }}>
//                         <h5 className="card-title mb-2" style={{color:'#20cd8d', fontSize: '1.1rem'}}>
//                             Title - hey can't come
//                         </h5>

//                         {/* Author/Creator */}
//                         {creator && creator.length > 0 && (
//                             <div className="mb-2 d-flex align-items-center" style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>
//                                 <i className="ri-user-3-line me-1"></i>
//                                 {creator.join(', ')}
//                             </div>
//                         )}

//                         <div className='d-flex justify-content-between align-items-center mb-3'>
//                             <div className='d-flex gap-1 align-items-center'>
//                                 <a 
//                                     href={sourceUrl} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className="px-2 py-1 rounded bg-primary text-white text-decoration-none" 
//                                     style={{
//                                         fontSize:'0.7rem',
//                                         fontWeight: '500',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         gap: '4px'
//                                     }}
//                                 >
//                                     <i className="ri-newspaper-line"></i>
//                                     {sourceName}
//                                 </a>
//                                 <a 
//                                     href={sourceUrl} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className="source-icon-wrapper" 
//                                     style={{
//                                         width: '22px',
//                                         height: '22px',
//                                         borderRadius: '50%',
//                                         overflow: 'hidden',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         backgroundColor: 'white',
//                                         textDecoration: 'none'
//                                     }}
//                                 >
//                                     <img 
//                                         src={sourceIconUrl} 
//                                         alt="Source" 
//                                         style={{
//                                             maxWidth: '100%',
//                                             maxHeight: '100%',
//                                             objectFit: 'contain'
//                                         }}
//                                         onError={(e) => {
//                                             e.target.onerror = null; 
//                                             e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%' y='50%' font-size='20' dy='.3em' text-anchor='middle' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E"
//                                         }}
//                                     />
//                                 </a>
//                             </div>
//                             <small style={{
//                                 fontSize: '0.65rem', 
//                                 color:"#f8f9fa",
//                                 opacity: 0.8,
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '4px'
//                             }}>
//                                 <i className="ri-time-line"></i>
//                                 {this.formatDate(pubDate)} {pubDateTZ}
//                             </small>
//                         </div>

//                         <p className="card-text mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
//                             Descriptions - Some quick example text to build on the card title and make up the bulk of the card's content.
//                         </p>
                        
//                         {/* Engagement Metrics */}
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <div className="d-flex gap-2">
//                                 <button 
//                                     onClick={this.handleLike}
//                                     className="btn btn-sm p-0 d-flex align-items-center"
//                                     style={{
//                                         color: this.state.liked ? '#20cd8d' : 'rgba(255,255,255,0.7)',
//                                         fontSize: '0.8rem',
//                                         gap: '4px'
//                                     }}
//                                 >
//                                     <i className="ri-thumb-up-fill"></i> 
//                                     <span>{this.state.liked ? 'Liked' : 'Like'}</span>
//                                 </button>
//                                 <button 
//                                     onClick={this.handleDislike}
//                                     className="btn btn-sm p-0 d-flex align-items-center"
//                                     style={{
//                                         color: this.state.disliked ? '#ff6b6b' : 'rgba(255,255,255,0.7)',
//                                         fontSize: '0.8rem',
//                                         gap: '4px'
//                                     }}
//                                 >
//                                     <i className="ri-thumb-down-fill"></i> 
//                                     <span>{this.state.disliked ? 'Disliked' : 'Dislike'}</span>
//                                 </button>
//                             </div>
//                             <button 
//                                 onClick={this.toggleComments}
//                                 className="btn btn-sm p-0 d-flex align-items-center"
//                                 style={{
//                                     color: this.state.showComments ? '#20cd8d' : 'rgba(255,255,255,0.7)',
//                                     fontSize: '0.8rem',
//                                     gap: '4px'
//                                 }}
//                             >
//                                 <i className="ri-chat-3-fill"></i> 
//                                 <span>Comments {this.state.comments.length > 0 ? `(${this.state.comments.length})` : ''}</span>
//                             </button>
//                         </div>
                        
//                         {/* Comment section */}
//                         {this.state.showComments && (
//                             <div className="mt-3" style={{
//                                 borderTop: '1px solid rgba(255,255,255,0.1)', 
//                                 paddingTop: '12px'
//                             }}>
//                                 <div className="mb-3" style={{ maxHeight: '150px', overflowY: 'auto' }}>
//                                     {this.state.comments.length > 0 ? (
//                                         this.state.comments.map((comment, index) => (
//                                             <div key={index} className="mb-2 p-2" style={{
//                                                 background: 'rgba(255,255,255,0.05)', 
//                                                 borderRadius: '8px',
//                                                 fontSize: '0.8rem'
//                                             }}>
//                                                 <div className="d-flex justify-content-between align-items-center mb-1">
//                                                     <small className="text-muted" style={{ fontSize: '0.65rem' }}>
//                                                         <i className="ri-user-line me-1"></i>Anonymous
//                                                     </small>
//                                                     <small className="text-muted" style={{ fontSize: '0.65rem' }}>
//                                                         {comment.timestamp}
//                                                     </small>
//                                                 </div>
//                                                 <div>{comment.text}</div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <div className="text-center py-2">
//                                             <small className="text-muted">No comments yet. Be the first to comment!</small>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <form onSubmit={this.handleCommentSubmit} className="d-flex gap-2">
//                                     <input
//                                         type="text"
//                                         value={this.state.newComment}
//                                         onChange={this.handleCommentChange}
//                                         className="form-control form-control-sm"
//                                         placeholder="Add a comment..."
//                                         style={{
//                                             background: 'rgba(255,255,255,0.1)', 
//                                             color: 'white', 
//                                             border: 'none',
//                                             borderRadius: '20px',
//                                             fontSize: '0.8rem',
//                                             padding: '0.5rem 1rem'
//                                         }}
//                                     />
//                                     <button 
//                                         type="submit" 
//                                         className="btn btn-sm d-flex align-items-center justify-content-center"
//                                         style={{
//                                             background: '#20cd8d',
//                                             color: 'white',
//                                             borderRadius: '50%',
//                                             width: '32px',
//                                             height: '32px',
//                                             flexShrink: 0
//                                         }}
//                                     >
//                                         <i className="ri-send-plane-fill" style={{ fontSize: '0.9rem' }}></i>
//                                     </button>
//                                 </form>
//                             </div>
//                         )}
                        
//                         {/* Action Buttons */}
//                         <div className='d-flex gap-2 mt-3'>
//                             <a 
//                                 href="#" 
//                                 className="btn btn-sm d-flex align-items-center justify-content-center flex-grow-1"
//                                 style={{
//                                     background: 'rgba(32, 205, 141, 0.1)',
//                                     color: '#20cd8d',
//                                     border: '1px solid #20cd8d',
//                                     borderRadius: '8px',
//                                     fontSize: '0.75rem',
//                                     padding: '0.4rem 0.5rem',
//                                     gap: '6px'
//                                 }}
//                             >
//                                 <i className="ri-article-line"></i>
//                                 Read More
//                             </a>
//                             <button 
//                                 className="btn btn-sm d-flex align-items-center justify-content-center"
//                                 style={{
//                                     background: 'rgba(32, 205, 141, 0.1)',
//                                     color: '#20cd8d',
//                                     border: '1px solid #20cd8d',
//                                     borderRadius: '8px',
//                                     fontSize: '0.75rem',
//                                     padding: '0.4rem 0.5rem',
//                                     gap: '6px'
//                                 }}
//                             >
//                                 <i className="ri-volume-up-line"></i>
//                                 Listen
//                             </button>
//                             <div className="position-relative">
//                                 <button 
//                                     onClick={this.toggleShareOptions}
//                                     className="btn btn-sm d-flex align-items-center justify-content-center"
//                                     style={{
//                                         background: 'rgba(32, 205, 141, 0.1)',
//                                         color: '#20cd8d',
//                                         border: '1px solid #20cd8d',
//                                         borderRadius: '8px',
//                                         fontSize: '0.75rem',
//                                         padding: '0.4rem 0.5rem',
//                                         gap: '6px',
//                                         width: '100%'
//                                     }}
//                                 >
//                                     <i className="ri-share-forward-line"></i>
//                                     Share
//                                 </button>
//                                 {this.state.shareOptionsVisible && (
//                                     <div className="position-absolute bottom-100 end-0 mb-2 p-2 rounded shadow"
//                                         style={{
//                                             background: '#3a4d55',
//                                             width: '160px',
//                                             zIndex: 10,
//                                             border: '1px solid rgba(255,255,255,0.1)'
//                                         }}
//                                     >
//                                         <button className="btn btn-sm w-100 d-flex align-items-center justify-content-start mb-1"
//                                             style={{
//                                                 background: 'transparent',
//                                                 color: 'white',
//                                                 fontSize: '0.7rem',
//                                                 gap: '8px'
//                                             }}
//                                         >
//                                             <i className="ri-facebook-circle-fill" style={{ color: '#1877F2' }}></i>
//                                             Facebook
//                                         </button>
//                                         <button className="btn btn-sm w-100 d-flex align-items-center justify-content-start mb-1"
//                                             style={{
//                                                 background: 'transparent',
//                                                 color: 'white',
//                                                 fontSize: '0.7rem',
//                                                 gap: '8px'
//                                             }}
//                                         >
//                                             <i className="ri-twitter-fill" style={{ color: '#1DA1F2' }}></i>
//                                             Twitter
//                                         </button>
//                                         <button className="btn btn-sm w-100 d-flex align-items-center justify-content-start"
//                                             style={{
//                                                 background: 'transparent',
//                                                 color: 'white',
//                                                 fontSize: '0.7rem',
//                                                 gap: '8px'
//                                             }}
//                                         >
//                                             <i className="ri-linkedin-box-fill" style={{ color: '#0077B5' }}></i>
//                                             LinkedIn
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }