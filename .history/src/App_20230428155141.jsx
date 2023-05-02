import { Header } from './Components/Header'
import { Post } from './Post'

import './global.css'


function App() {
  return (
    <>
      <Header />
      <Post
        author="Gabriel"
        content="teste"
      />
    </>
  )
}

export default App
