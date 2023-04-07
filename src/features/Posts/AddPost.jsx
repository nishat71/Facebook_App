import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPosts } from './PostSlice';


const AddPost = () => {
    const [newPosts, setNewPosts] = useState("");
    const dispatch = useDispatch();

    // const noOfPost = useSelector((state) => state.postReducer.posts.length);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const post = { id: noOfPost + 1, postText: newPosts, comments: [] }
        const post = { id: uuidv4(), postText: newPosts, comments: [], likeCount: 0, disabled: false };
        dispatch(addPosts(post));
        setNewPosts('');
    }
    return (
        <div className='post-container'>
            <h2 className='post-title'>Create post</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <input type="text" placeholder='Want to post something?....' value={newPosts} onChange={(e) => setNewPosts(e.target.value)} required />
                </div>
                <div className='btn_group'>
                    <button className='btn submit_btn'>Create Post</button>
                </div>
            </form>

        </div>
    );
};

export default AddPost;
