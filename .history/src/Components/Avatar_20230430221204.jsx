import styles from './Avatar.module.css';

export function Avatar({ hasBorder, src}) {
    const hasBorder = props.hasBorder != false

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}