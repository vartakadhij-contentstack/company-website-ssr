import styles from '../styles/CS_Footer.module.css'
import Link from 'next/link'

const CSFooter = (props) =>{
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-details"]}>
                <div className={styles["privacy-and-terms"]}>
                    <Link href={`https://www.contentstack.com/privacy/`}>
                        <a>
                            <p className={styles["privacy-link"]}>Privacy</p>
                        </a>
                    </Link>
                    <Link href={`https://www.contentstack.com/terms-of-service/`}>
                        <a>
                            <p className={styles["terms-link"]}>Terms</p>
                        </a>
                    </Link>
                </div>
                <div className={styles["copyright-text"]}>
                    <p>Copyright © 2021 Contentstack. All Rights Reserved.</p>
                </div> 
            </div>
            <div className={styles["social-media-links"]}>
                <div className={styles["section-heading"]}>
                    <p>Social Media Links:</p>
                </div>
                <div className={styles["links"]}>
                    <Link href={`https://www.facebook.com/contentstack`}>
                        <a>
                            <p>Facebook</p>
                        </a>
                    </Link>
                    <Link href={`https://www.linkedin.com/company/contentstack`}>
                        <a>
                            <p>LinkedIn</p>
                        </a>
                    </Link>
                    <Link href={`https://twitter.com/contentstack`}>
                        <a>
                            <p>Twitter</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CSFooter;