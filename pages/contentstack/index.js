import CSLayout from '../../components/CS_Layout'
import styles from '../../styles/CS_Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

function Contentstack () {
    return(
        <div>
            <Head>
                <title>Contentstack Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CSLayout>
                <div
                    className={styles["bg-image-container"]}
                    style={
                        {
                            backgroundImage: "url(" + `${`/contentstack-bg-image.jpg`}` + ")",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            overflow: "scroll"
                        }
                    }
                    >
                    <div className={styles["bg-text"]}>
                        <h1>Finally, A Modern Content <br /> Management System</h1>
                    </div>
                    <div className={styles["bg-sub-text"]}>
                        <h1>Contentstack brings business and technology teams together
                            to deliver personalized, <br /> omnichannel digital experiences.
                        </h1>
                    </div>
                    <div className={styles["try-for-free"]}>
                        <Link href={`/contentstack`}>
                            <a>
                                <p>Try for free</p>
                            </a>
                        </Link>
                    </div>
                    <div className={styles["request-a-demo"]}>
                        <Link href={`/contentstack`}>
                            <a>
                                <p>Request a demo</p>
                            </a>
                        </Link>
                    </div>
                </div>   
            </CSLayout>
        </div>
    )
}

export default Contentstack;