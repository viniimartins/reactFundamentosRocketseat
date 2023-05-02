import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'


import styles from './App.module.css'

import './global.css'

// author : { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content : String

const posts = [
  {},
];


function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Gabriel"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut, accusamus quasi hic earum blanditiis adipisci reiciendis enim eaque facilis doloribus, iusto incidunt! Aliquid ut debitis temporibus eius placeat autem!"
            />
            <Post
              author="Gabriel"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut, accusamus quasi hic earum blanditiis adipisci reiciendis enim eaque facilis doloribus, iusto incidunt! Aliquid ut debitis temporibus eius placeat autem!"
            />
          </main>
        </div>
      </div>

    </>
  )

}

export default App
