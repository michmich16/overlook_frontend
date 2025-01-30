import { InputField } from "../components/InputField/InputField";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useState } from "react";
import s from "../styles/ReservationPage.module.scss";
import { Select } from "../components/Select/Select";
import {UserContext} from "../context/UserContext"

export const ReservationPage = () => {
    const [selectedPrice, setSelectedPrice] = useState("normal"); //tjekker radio input for priskasse

    const handlePriceChange = (value) => {
        setSelectedPrice(value);
    };

    return (
        <>
            <GridContainer columns="3fr 1fr">
                <MarginContainer border="1px solid grey" margin="1rem" height="auto">
                    <SectionTitle title={"Reservation"} />
                    <form className={s.formStyle}>
                        <Select
                            placeholder={"Vælg destination & hotel"}
                            options={[
                                "Overlook Aalborg City",
                                "Overlook Aalborg Øst",
                                "Overlook Grand Marina",
                                "Overlook Seurahuone Helsinki",
                                "Overlook Grand Marina",
                                "Overlook Seurahuone Helsinki",
                                "Overlook Webers",
                                "Overlook Copenhagen",
                            ]}
                        />
                        <Select
                            placeholder={"Vælg værelsestype"}
                            options={[
                                "Economy",
                                "Junior Suite",
                                "Presidental Suite",
                                "Standard",
                                "Superior",
                                "Superior Plus",
                            ]}
                        />
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
                        <div>
                            <InputField
                                type="radio"
                                labelText={"normal"}
                                name="price"
                                id="radioNormalField"
                                checked={selectedPrice === "normal"}
                                action={() => handlePriceChange("normal")}
                            />
                            <InputField
                                type="radio"
                                labelText={"flex"}
                                name="price"
                                id="radioFlexField"
                                checked={selectedPrice === "flex"}
                                action={() => handlePriceChange("flex")}
                            />
                        </div>
                        <InputField
                            type="date"
                            labelText="Check-in dato"
                            name="checkIn"
                            id="checkInDateField"
                        // action={setPassword}
                        />
                        <InputField
                            type="date"
                            labelText="Check-out dato"
                            name="checkOut"
                            id="checkOutDateField"
                        // action={setPassword}
                        />
                        <InputField
                            type="tel"
                            placeholder="Telefon"
                            name="telefonNumber"
                            id="telefonField"
                        // action={setPassword}
                        />
                        <textarea name="commentBox" id="commentField" cols="30" rows="10"></textarea>
                    </form>
                </MarginContainer>
                <MarginContainer />
            </GridContainer>
        </>
    );
};
