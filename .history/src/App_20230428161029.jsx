import { Header } from './Components/Header'
import { Post } from './Post'

import './global.css'


import styles from './App.module.css'

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <aside>
            sidebar
          </aside>
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
