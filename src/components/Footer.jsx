import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const styles = {
    footer: {
        backgroundColor: "white",
        flexShrink: "none",
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}
export default function Footer() {
    return (
        <footer
            id="sticky-footer"
            className="py-1 bg-light text-black-50"
            style={styles.footer}>

            <div className="container text-dark text-center justify-content-center">
                <h5> Developed By Ian Vignolles-Jeong</h5>


                <a
                    href="https://www.linkedin.com/in/ian-vignolles-jeong-3916571b0/"
                    rel="noreferrer"
                    target="_blank">

                    <img
                        src={linkedin}
                        alt="linkedin"
                        style={styles.icon} />
                </a>

                <a
                    href="https://github.com/IVignollesJeong"
                    rel="noreferrer"
                    target="_blank">

                    <img
                        src={github}
                        alt="github"
                        style={styles.icon} />
                </a>


                <br />

                <small>
                    Copyright 2023 &copy; Ian Vignolles-Jeong
                </small>

            </div>
        </footer>
    )
}