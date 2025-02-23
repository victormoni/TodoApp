import styles from './Header.module.css'

import rocketLogo from '../assets/Logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logo" />
        </header>
    )
}