import { Header } from './Components/Header'
import { Post } from './Post'

import './global.css'


import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>

          <Post
            author="Gabriel"
            content="teste"
          />

        </main>
      </div>
    </>
  )

}


