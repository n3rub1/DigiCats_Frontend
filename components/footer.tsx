import React from "react";
import Image from "next/image";
import facebook from "../public/Facebook Icon.svg"
import github from "../public/GitHub Icon.svg"
import instagram from "../public/Instagram Icon.svg"
import linkedin from "../public/Linkedin Icon.svg"
import twitter from "../public/Twitter Icon.svg"

export default function Footer() {
    return (
        <footer className="footer-top">
            <div className="footer-top-links">
                <ul className="top-nav-list">
                    <li className="list-item">
                        <a href="#">Digicats</a>
                    </li>
                </ul>
                <ul className="top-nav-list">
                    <li className="list-item">
                        <Image
                            className="footer-icon"
                            alt="Image of a cats' paw"
                            src={facebook}
                        ></Image>
                    </li>
                    <li className="list-item">
                        <Image
                            className="footer-icon"
                            alt="Image of a cats' paw"
                            src={github}
                        ></Image>
                    </li>

                    <li className="list-item">
                        <Image
                            className="footer-icon"
                            alt="Image of a cats' paw"
                            src={instagram}
                        ></Image>
                    </li>

                    <li className="list-item">
                        <Image
                            className="footer-icon"
                            alt="Image of a cats' paw"
                            src={linkedin}
                        ></Image>
                    </li>

                    <li className="list-item">
                        <Image
                            className="footer-icon"
                            alt="Image of a cats' paw"
                            src={github}
                        ></Image>
                    </li>
                </ul>
            </div>
            <div className="footer-para">
                Digicats is built and maintained by FilthyNoodles© ltd.
            </div>
        </footer>
    )
}