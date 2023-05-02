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
            </header>
        </article>
    )
}