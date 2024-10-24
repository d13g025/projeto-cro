import React from "react";
import styles from "./Coments.module.css";

const Coments = () => {


    const comentsData = [
        { 
            videoUrl: "https://www.youtube.com/embed/d_SkspNUE5E?si=jgwwwW9lBJrf1eYp",
           text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            videoUrl: "https://www.youtube.com/embed/fdPNOW2Sa5U?si=gMwJhT_G6mTB64S6",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            videoUrl: "https://www.youtube.com/embed/hthikbr2OEg?si=NTyMncBdbNy-Lcc3",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            videoUrl: "https://www.youtube.com/embed/-tBIENS6uPE?si=YBX7rXtGI0GbEXv5https://www.youtube.com/embed/fdPNOW2Sa5U?si=gMwJhT_G6mTB64S6",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ]

    return (
        <section className={styles.sectionComents}>
            <div className={styles.comentsTitle}>
                <h1>DEPOIMENTOS</h1>
            </div>
            <div className={styles.coments}>
                {comentsData.map((coment, index) => (
                    <div key={index} className={styles.comentWrapper}>
                        <div className={styles.comentIframe}>
                            <iframe
                                src={coment.videoUrl}
                                title={`YouTube video player ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.coment}>
                            <p className={styles.comentText}>{coment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Coments;