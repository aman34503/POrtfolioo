import React from "react";

export const IntroInfo = () => {
    return (<>
        {/* <p>
            Myself Aman shrivastava  
            <br/>
            "Curious steps, creative thoughts; navigating paths, forging growth"
        </p> */}
    </>);
};
export const AboutInfo = () => {
    const style = {
        textDecoration: "underline",
        fontWeight: "800",
        color: "rgb(255, 245, 232)"
    };
    return (
        <p>
            I am a passionate programming enthusiast and a full-stack web developer, now thriving as a working professional in the tech world.
            <br/>
            <br/>
            Armed with real-world experience and a love for coding, I specialize in crafting websites using HTML5, CSS3, SVG, and JavaScript.
            I embrace the ethos of "Progressive Enhancement," pushing the front-end boundaries while prioritizing browser support and performance.
            <br/>
            <br/>
            Continuously evolving, I stay ahead by reading books and actively participating in open-source events.
            <br/>
            <br/>
            Let's connect! Feel free to{" "}
            <a href="/contact" style={style}>
                Contact ME.
            </a>
            {" "}
            We can groove to some cool HIP-HOP beats together 🎧.
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                fill="#000000"
            >
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 15h-1V7h1v10zm0-12h-1v4h1V5z"/>
            </svg>
        </p>
    );
};
