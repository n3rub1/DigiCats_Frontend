import React, { use } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

interface user {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


export default function Register() {

    const [userData, setUserData] = React.useState<user>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setUserData((prev) => { return { ...prev, [name]: value } })
    }

    return (
        <>
            <Header />
            <div className="top-register">
                <div className="left-register">
                    <h2 className="title-register">Sponsor a cat</h2>
                    <p className="para-register">Register with our website and get to sponsor one (or many) of our cats.  This will help us to give better food, tastier treats, fluffier shelters and all the good stuff that makes all our cats happy</p>
                </div>
                <div className="right-register">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                    />

                    <input
                        className="input-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                    />

                    <input
                        className="input-field"
                        type="email"
                        placeholder="joe@mail.com"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />

                    <input
                        className="input-field"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />

                    <button className="registerButton" type="submit">Register 😻</button>
                    <button className="registerButton" >Login 😸</button>

                </div>
            </div>
            <Footer />
        </>
    )
}