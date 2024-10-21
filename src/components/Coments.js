import React from "react";
import Style from "./Coments.module.css";

const Coments = () => {
    return (
        <section className={Style.sectionComents}>
            <div className={Style.comentsTitle}>
                <h1>Comentários</h1>
            </div>
            <div className={Style.coments}>
                <div className={Style.coment}>
                    <p className={Style.comentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                </div>
                <div className={Style.comentIframe}>
                    <iframe 
                    src="https://www.youtube.com/embed/5qap5aO4i9A" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    ></iframe>
                </div>
            </div>
        </section>
    )

}

export default Coments;