import styles from '../styles/RE_Footer.module.css'
import Link from 'next/link'

const REFooter = (props) =>{
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-details"]}>
                <div className={styles["privacy-and-terms"]}>
                    <Link href={`https://www.raweng.com/privacy-statement`}>
                        <a>
                            <p className={styles["privacy-link"]}>Privacy</p>
                        </a>
                    </Link>
                    <Link href={`https://www.raweng.com/backend-terms-of-service`}>
                        <a>
                            <p className={styles["backend-terms-link"]}>Backend Terms of Service</p>
                        </a>
                    </Link>
                </div>
                <div className={styles["copyright-text"]}>
                    <p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
                </div> 
            </div>
            <div className={styles["social-media-links"]}>
                <div className={styles["section-heading"]}>
                    <p>Social Media Links:</p>
                </div>
                <div className={styles["links"]}>
                    <Link href={`https://www.facebook.com/rawengineering/`}>
                        <a>
                            <p>Facebook</p>
                        </a>
                    </Link>
                    <Link href={`https://www.linkedin.com/company/raw-engineering`}>
                        <a>
                            <p>LinkedIn</p>
                        </a>
                    </Link>
                    <Link href={`https://twitter.com/raweng`}>
                        <a>
                            <p>Twitter</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default REFooter;