import { InputField } from '../components/InputField/InputField'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { MarginContainer } from '../components/MarginContainer/MarginContainer'
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { NavLink } from 'react-router-dom';
import s from '../styles/LoginPage.module.scss'

export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loginMessage, setLoginMessage] = useState();

    const { setUserData } = useContext(UserContext);
    console.log(email, password);

    function submitData() {

        const body = new URLSearchParams();
        body.append('username', email);
        body.append('password', password);

        const options = {
            method: "POST",
            body: body,
        };

        fetch('http://localhost:4000/login', options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data);
                    setLoginMessage('Du er nu logget ind');
                    console.log(data);

                } else {
                    setLoginMessage('Forkert brugernavn eller password');
                }
            })
            .catch((err) => setError(err));

    }
    return (
        <>
            <GridContainer columns="3fr 1fr">
                <MarginContainer border="1px solid grey" margin="1rem" height="70vh">
                    <form className={s.formStyle}>
                        <InputField
                            type="email"
                            placeholder="Brugernavn"
                            name="Username"
                            id="usernameField"
                            action={setEmail}
                        />
                        <InputField
                            type="password"
                            placeholder={"Adgangskode"}
                            name="Password"
                            id="passwordField"
                            action={setPassword}
                        />
                    </form>
                    <div className={s.buttonContainer}>
                        <button className={s.loginBtnStyle} onClick={() => submitData()}>Login</button>
                        {loginMessage && <p>{loginMessage}</p>} 
                        <NavLink to="/signup" className={s.navLinkStyle}>
                            <button className={s.loginBtnStyle}>Signup</button>
                        </NavLink>
                    </div>
                </MarginContainer>
                <MarginContainer>
                </MarginContainer>
            </GridContainer>

        </>
    )
}