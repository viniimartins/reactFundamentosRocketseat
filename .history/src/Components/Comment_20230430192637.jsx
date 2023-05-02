import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/84347013?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">Cerda há 1h</time>
                        </div>
                    </header>
                    <p>
                        Muito bom Devon, parabens!
                    </p>
                </div>

                <footer>
                    Aplaudir
                </footer>

            </div>
        </div>
    )
}