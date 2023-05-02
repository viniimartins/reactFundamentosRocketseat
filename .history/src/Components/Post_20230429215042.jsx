import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/84347013?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernades</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio ás 0" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
        </article>
    )
}