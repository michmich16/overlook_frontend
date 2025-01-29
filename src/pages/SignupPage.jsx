import { InputField } from "../components/InputField/InputField";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import s from "../styles/SignupPage.module.scss";

export const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const submitSignupData = () => {
        // Clear previous messages
        setError("");
        setSuccessMessage("");

        const body = new URLSearchParams();
        body.append("email", email);
        body.append("password", password);
        body.append("firstname", firstname);
        body.append("lastname", lastname);
        body.append("is_active", true);
        body.append("org_id", "1");
        body.append("refresh_token", "1234");
        body.append("groups", "1");

        const options = {
            method: "POST",
            body: body,
        };

        fetch("http://localhost:4000/users", options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Server error: ${res.status} ${res.statusText}`);
                }
                return res.json(); 
            })
            .then((data) => {
                console.log("API Response:", data);
                setUserData(data);
                setSuccessMessage(`Du er nu oprettet, ${firstname}!`);
                setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setError(err.message || "Noget gik galt, prøv igen.");
            });
    };

    return (
        <>
            <GridContainer columns="3fr 1fr">
                <MarginContainer border="1px solid grey" margin="1rem" height="70vh">
                    <SectionTitle title={"Sign Up"} />
                    <form className={s.formStyle}>
                        <InputField
                            type="text"
                            placeholder="Fornavn"
                            name="firstname"
                            id="firstnameField"
                            action={setFirstname}
                        />
                        <InputField
                            type="text"
                            placeholder="Efternavn"
                            name="lastname"
                            id="lastnameField"
                            action={setLastname}
                        />
                        <InputField
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="emailField"
                            action={setEmail}
                        />
                        <InputField
                            type="password"
                            placeholder="Adgangskode"
                            name="password"
                            id="passwordField"
                            action={setPassword}
                        />
                    </form>
                    {error && <p className={s.errorMessage}>{error}</p>}
                    {successMessage && <p className={s.successMessage}>{successMessage}</p>}
                    <div className={s.buttonContainer}>
                        <button
                            className={s.loginBtnStyle}
                            onClick={(event) => {
                                event.preventDefault();
                                submitSignupData();
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                </MarginContainer>
                <MarginContainer />
            </GridContainer>
        </>
    );
};
