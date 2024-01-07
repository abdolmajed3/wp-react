import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API_URL from '../config'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/posts?_embed`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPosts(data)
            })
    }, [])

    function getImageUrl(post) {
        if (post._embedded["wp:featuredmedia"]) {
            return post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url
        } else {
            return null
        }
    }
    return (
        <>
            <h1>wordpress + reactJs application</h1>
            <p>
                this web application is created to show you how you can get posts from wordpress and show it into your reactJs application
            </p>
            <main>
                {posts.map((post) => {
                    return (
                        <article key={post.id} className='homearticle'>
                            {getImageUrl(post) ? <img style={{ width: '500px', display: 'block', padding: '10px' }} src={getImageUrl(post)} alt={post.title.rendered} /> : <img src="https://picsum.photos/500/300" alt='no image' />}
                            <Link style={{ display: 'block', padding: '10px' }} to={`${post.id}`} state={post.id}>{post.title.rendered}</Link>
                        </article>
                    )
                })}
            </main>
            <p> visit my linkedin : <a href='https://www.linkedin.com/in/abdolmajed-shahbakhsh/'>abdolmajed shahbakhsh</a></p>
        </>
    )
}

export default Home