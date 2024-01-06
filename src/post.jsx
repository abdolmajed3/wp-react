import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "./config";

const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/${postId}?_embed`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [postId]); // Add the postid as a dependency for the useEffect hook

    if (!post) {
        return (
            <div>
                post is loading...
            </div>
        );
    }

    return (
        <>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
    );
};

export default Post;