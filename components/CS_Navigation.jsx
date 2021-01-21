import styles from '../styles/CS_Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CSNavigation = (props) => {
    return(
        <nav className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <Image
                    src="/contentstack.png"
                    alt={`CS_Logo`}
                    width = "100"
                    height = "100"
                    className={styles["cs-logo"]}
                >
                </Image>
            </div>
            <div className={styles["nav-links"]}>
                <Link href={`/`}>
                    <a>
                        <p className={styles["nav-link-home"]}>Home</p>
                    </a>
                </Link>
                <Link href={`/raw-engineering`}>
                    <a>
                        <p className={styles["nav-link-re"]}>Raw Engineering</p>
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

export default CSNavigation;