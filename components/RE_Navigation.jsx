import styles from '../styles/RE_Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

const RENavigation = (props) => {
    return(
        <nav className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <Image
                    src="/raweng.png"
                    alt={`RE_Logo`}
                    width = "100"
                    height = "100"
                    className={styles["re-logo"]}
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
                <Link href={`/surfboard-ventures`}>
                    <a>
                        <p className={styles["nav-link-sb"]}>Surfboard</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default RENavigation;