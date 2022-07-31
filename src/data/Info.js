import React from "react";

export const IntroInfo = () => {
    return (<>
        <p>
            Myself Aman shrivastava  
            <br/>
            "I write code, love code, live code."
        </p>
    </>);
};
export const AboutInfo = () => {
    const style = {
        textDecoration: "underline",
        fontWeight: "800",
        color: "rgb(255, 245, 232)"
    };
    return (<>
        <p>
            I am Programming enthusiast and fullstack Web developer.
            <br/>
            <br/>
            Currently pursuing my BTech (Engineering) degree in Computer Science. 
            <br/>
            <br/>I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, SVG & JavaScript.
            With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.  
            In a quest for always keeping myself updated, I read books ,attend Opensource Events. 
            <br/>
            <br/>
            At last, Feel free to{" "}
            <a href="/contact"
                style={style}>
                Contact ME.
            </a>
            {" "}
            We can listen to good POP music together 🎧.
        </p>
    </>);
};
