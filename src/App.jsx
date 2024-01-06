import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Post from './post'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:postId" element={<Post />} />
    </Routes>
    </>
  )
}

export default App
