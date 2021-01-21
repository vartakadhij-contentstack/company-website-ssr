import styles from '../styles/SB_Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SBNavigation = (props) => {
    return(
        <nav className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <Image
                    src="/surfboard.jpeg"
                    alt={`SB_Logo`}
                    width = "100"
                    height = "100"
                    className={styles["sb-logo"]}
                >
                </Image>
            </div>
            <div className={styles["nav-links"]}>
                <Link href={`/`}>
                    <a>
                        <p className={styles["nav-link-home"]}>Home</p>
                    </a>
                </Link>
                <Link href={`/contentstack`}>
                    <a>
                        <p className={styles["nav-link-cs"]}>Contentstack</p>
                    </a>
                </Link>
                <Link href={`/raw-engineering`}>
                    <a>
                        <p className={styles["nav-link-re"]}>Raw Engineering</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default SBNavigation;