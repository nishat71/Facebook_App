import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';


const SingleReply = (props) => {
    console.log(props);
    
    const [SingleReply, setSingleReply] = useState('')
    // const [isLike, setIsLike] = useState(false);


    const handleReplySubmit = (e) => {
        e.preventDefault();
        // const commentDetails = { commentId: uuidv4(), postId: postId, commentText: comments }
        // dispatch(addComment(commentDetails));
        // setComments("");
    }

    return (
        <div className='reply_comment'>
            <div className='user_profile'><FontAwesomeIcon className='profile_icon' icon={faUser} /></div>
            <div className='reply_comment_body'>
                <form className='comment_content' onClick={handleReplySubmit}>
                    <input type="text" className='reply_field' placeholder='Write a reply.....' value={SingleReply} onChange={(e) => setSingleReply(e.target.value)} />
                    <button className='btn'><FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
                <div>
                    <button className='like_reply_btn'>Like</button>
                    <button className='like_reply_btn'>Reply</button>
                </div>
            </div>
        </div>




        // <div className='reply_comment'>
        //     <div className='user_profile'><FontAwesomeIcon className='profile_icon' icon={faUser} /></div>
        //     <div className='reply_comment_body'>
        //         <p className='reply_comment_text'>hlw
        //             {
        //                 isLike &&
        //                 <span className='single_comment_like'><FontAwesomeIcon className='single_comment_like_icon' icon={faThumbsUp} /></span>
        //             }
        //         </p>
        //         <div>
        //             <button className='like_reply_btn' onClick={() => setIsLike(!isLike)}>Like</button>
        //             <button className='like_reply_btn'>Reply</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleReply;