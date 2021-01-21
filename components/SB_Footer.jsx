import styles from '../styles/SB_Footer.module.css'
import Link from 'next/link'

const SBFooter = (props) =>{
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-details"]}>
                <div className={styles["related-links"]}>
                    <Link href={`https://www.surfboardventures.com/portfolio`}>
                        <a>
                            <p className={styles["portfolio-link"]}>Portfolio</p>
                        </a>
                    </Link>
                    <Link href={`https://www.surfboardventures.com/academy`}>
                        <a>
                            <p className={styles["academy-link"]}>Academy</p>
                        </a>
                    </Link>
                    <Link href={`https://www.surfboardventures.com/events`}>
                        <a>
                            <p className={styles["events-link"]}>Events</p>
                        </a>
                    </Link>
                    <Link href={`https://www.surfboardventures.com/gallery`}>
                        <a>
                            <p className={styles["gallery-link"]}>Gallery</p>
                        </a>
                    </Link>
                </div>
                <div className={styles["copyright-text"]}>
                    <p>Copyright © 2021 Surfboard Ventures. All Rights Reserved.</p>
                </div> 
            </div>
            <div className={styles["social-media-links"]}>
                <div className={styles["section-heading"]}>
                    <p>Social Media Links:</p>
                </div>
                <div className={styles["links"]}>
                    <Link href={`https://www.facebook.com/surfboardventures/`}>
                        <a>
                            <p>Facebook</p>
                        </a>
                    </Link>
                    <Link href={`https://www.linkedin.com/company/surfboard-ventures/`}>
                        <a>
                            <p>LinkedIn</p>
                        </a>
                    </Link>
                    <Link href={`https://twitter.com/surfboardvc`}>
                        <a>
                            <p>Twitter</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SBFooter;