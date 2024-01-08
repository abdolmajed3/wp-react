import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../config";

// This function component fetches a post from the API and renders its title and content.

/**
 * Fetches a post from the API and renders its title and content.
 * @returns JSX element displaying the post title and content
 */
const Post = () => {
    const { postId } = useParams(); // Get the postId from the URL params
    const [post, setPost] = useState(null); // Initialize the post state variable

    useEffect(() => {
        /**
         * Fetches data from the API and sets the post state variable
         */
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${postId}?_embed`); // Fetch post data from the API
                const data = await response.json(); // Parse the response data
                setPost(data); // Set the post state variable with the fetched data
            } catch (error) {
                console.log(error); // Log any errors that occur during the fetch
            }
        };

        fetchData(); // Call the fetchData function when the component mounts or when the postId changes
    }, [postId]); // Add the postId as a dependency for the useEffect hook

    if (!post) {
        return (
            <div>
                post is loading...
            </div>
        );
    }

    return (
        <>
            <h1>{post.title.rendered}</h1> {/* Render the post title */}
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> {/* Render the post content */}
        </>
    );
};

export default Post;