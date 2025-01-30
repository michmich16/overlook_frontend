import { InputField } from '../components/InputField/InputField'
import { GridContainer } from '../components/GridContainer/GridContainer'
import { MarginContainer } from '../components/MarginContainer/MarginContainer'
import { SectionTitle } from '../components/SectionTitle/SectionTitle'
import { useContext, useState } from 'react';
import s from '../styles/ReservationPage.module.scss';

export const ReservationPage = () =>{

    return(
        <>
         <GridContainer columns="3fr 1fr">
                <MarginContainer border="1px solid grey" margin="1rem" height="70vh">
                    <SectionTitle title={"Reservation"} />
                    <form className={s.formStyle}>
                        <InputField
                            type="text"
                            placeholder="Fornavn"
                            name="firstname"
                            id="firstnameField"
                            // action={setFirstname}
                        />
                        <InputField
                            type="text"
                            placeholder="Efternavn"
                            name="lastname"
                            id="lastnameField"
                            // action={setLastname}
                        />
                        <InputField
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="emailField"
                            // action={setEmail}
                        />
                        <InputField
                            type="password"
                            placeholder="Adgangskode"
                            name="password"
                            id="passwordField"
                            // action={setPassword}
                        />
                    </form>

                </MarginContainer>
                <MarginContainer />
            </GridContainer>
        </>
    )
}