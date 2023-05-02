import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'

import styles from './App.module.css'

import './global.css'

// author : { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content : String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/84347013?v=4',
      name: "Diego Fernades",
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋", },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀," }
      
      
      "<a href="">jane.design/doctorcare</a>""

      < a href = "" > #novoprojeto</ > { ''}
      < a href = "" > #nlw</ > { ''}
      < a href = "" > #rocketseat</ >
        </p >
      ]
  },
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
