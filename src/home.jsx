import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API_URL from './config'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}?_embed`)
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
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id} style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px', margin: '0' }}>
                            {getImageUrl(post) && <img style={{ width: '500px' }} src={getImageUrl(post)} alt={post.title.rendered} />}
                            {/* <a href={post.link}>{post.title.rendered}</a> */}
                            <Link to={`${post.id}`} state={post.id}>{post.title.rendered}</Link>
                        </li>
                    )
                })}
            </ul>
            <p> visit my linkedin : <a href='https://www.linkedin.com/in/abdolmajed-shahbakhsh/'>abdolmajed shahbakhsh</a></p>
        </>
    )
}

export default Home