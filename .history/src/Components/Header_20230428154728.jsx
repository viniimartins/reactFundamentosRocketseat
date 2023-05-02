import styles from './Header.module.css';
import IgniteLogo from '../assets/ignite.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>
    );
}