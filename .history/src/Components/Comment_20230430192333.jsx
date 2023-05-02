import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/84347013?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}></div>

            </div>
        </div>
    )
}