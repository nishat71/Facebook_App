import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faShare, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import EditPost from './EditPost';
import Comments from './Comments';
import { useDispatch } from 'react-redux';
import { likeCountIncrement, likeCountDecrement } from './PostSlice.js';



const SinglePost = ({ post }) => {
    const { id, postText, comments, likeCount, disabled } = post;
    // console.log(post);

    const dispatch = useDispatch();


    const handleLikeCount = (id) => {
        if (!disabled) {
            dispatch(likeCountIncrement(id));
        }
        if (disabled) {
            dispatch(likeCountDecrement(id));
        }
    }
    // const handleLikeCount = (e) => {
    //     dispatch(likeCountIncrement(id))
    //     e.currentTarget.disabled = true;
    // }


    return (
        <div className='single_post' key={id}>
            <div className='single_post_text_content'>
                <p>{postText}</p>
                <EditPost post={post}></EditPost>
            </div>
            <div className='like-comment-content'>
                {
                    likeCount > 0 && <div className='like_count'>
                        <span className='like_icon_btn' >
                            <FontAwesomeIcon className='like_icon' icon={faThumbsUp} />
                        </span>
                        <p>{likeCount}</p>
                    </div>
                }
                <div className='single_post_btm'>
                    <button className='like_btn' onClick={() => handleLikeCount(id)} style={disabled ? { color: '#1677ff' } : { color: '#67656B' }}>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </span>
                        Like
                    </button>
                    <button className='like_btn'>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faMessage} />
                        </span>
                        Comment
                    </button>
                    <button className='like_btn'>
                        <span className='icon-btn'>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                        share
                    </button>
                </div>
                {/* <Comments comment={comments} key={id}/> */}
                <Comments comment={comments} postId={id}/>
            </div>
        </div>
    );
};

export default SinglePost;