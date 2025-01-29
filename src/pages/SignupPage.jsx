import { InputField } from '../components/InputField/InputField';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import s from '../styles/SignupPage.module.scss';

export const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const { setUserData } = useContext(UserContext);
    console.log(firstname, lastname, username, password);
    function submitSignupData() {
        const body = new URLSearchParams();
        body.append('username', username);
        body.append('password', password);
        body.append('firstname', firstname);
        body.append('lastname', lastname);
        body.append('id', 1)
        body.append('is_active', true);
        body.append('org_id', 1);
        body.append('refresh_token', 1234);
        body.append('groups', 1);

        const options = {
            method: 'POST',
            body: body,
        };

        fetch('http://localhost:4000/users', options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data);
                    setLoginMessage('Du er nu oprettet!');
                    console.log(data);
                } else {
                    setLoginMessage('Hov! Noget gik galt, prøv igen.');
                }
            })
            .catch((err) => {
                setError('Noget gik galt, prøv igen.');
                console.error(err);
            });
    }

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
                            type="text"
                            placeholder="Brugernavn"
                            name="username"
                            id="usernameField"
                            action={setUsername}
                        />
                        <InputField
                            type="password"
                            placeholder="Adgangskode"
                            name="password"
                            id="passwordField"
                            action={setPassword}
                        />
                    </form>
                    {loginMessage && <p>{loginMessage}</p>}
                    {error && <p>{error}</p>}
                    <div className={s.buttonContainer}>
                        <button className={s.loginBtnStyle} onClick={() => submitSignupData()}>Sign up</button>
                    </div>
                </MarginContainer>
                <MarginContainer />
            </GridContainer>
        </>
    );
};
