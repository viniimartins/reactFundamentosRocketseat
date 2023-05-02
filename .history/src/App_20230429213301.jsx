import { Header } from './Components/Header'
import { Post } from './Componets/Post'

import './global.css'


import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar'

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
