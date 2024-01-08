import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API_URL from '../config'

// Define a functional component called Home
const Home = () => {
    // Declare a state variable called 'posts' with an initial value of an empty array
    const [posts, setPosts] = useState([])

    // Fetch the posts data from the API when the component mounts and store it in the 'posts' state as an array
    useEffect(() => {
        fetch(`${API_URL}/posts?_embed`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPosts(data)
            })
    }, [])

    // Function to get the image URL from the post data
    function getImageUrl(post) {
        if (post._embedded["wp:featuredmedia"]) {
            return post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
        } else {
            return null
        }
    }

    // Render the component
    return (
        <>
            {/* application name Heading */}
            <h1>wordpress + reactJs application</h1>
            {/* a Description about app */}
            <p>
                this web application is created to show you how you can get posts from wordpress and show it into your reactJs application
            </p>
            {/* Main content */}
            <main>
                {/* Render each post from the 'posts' state using a 'map' function */}
                {posts.map((post) => {
                    return (
                        <article key={post.id} className='homearticle'>
                            {/* Render the image if available, otherwise render a placeholder image */}
                            {getImageUrl(post) ? <img style={{ width: '500px', display: 'block', padding: '10px' }} src={getImageUrl(post)} alt={post.title.rendered} /> : <img src="https://picsum.photos/500/300" alt='no image' />}
                            {/* Render the link to the post */}
                            <Link style={{ display: 'block', padding: '10px' }} to={`${post.id}`} state={post.id}>{post.title.rendered}</Link>
                        </article>
                    )
                })}
            </main>
            {/* Footer */}
            <p> visit my linkedin : <a href='https://www.linkedin.com/in/abdolmajed-shahbakhsh/'>abdolmajed shahbakhsh</a></p>
        </>
    )
}

export default Home