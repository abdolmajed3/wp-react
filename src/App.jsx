import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Post from './components/post'
import Header from './components/header'
import Categories from './components/categories'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:postId" element={<Post />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
    </>
  )
}

export default App
