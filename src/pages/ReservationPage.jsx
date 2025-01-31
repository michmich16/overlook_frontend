import { InputField } from "../components/InputField/InputField";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useState, useContext } from "react";
import s from "../styles/ReservationPage.module.scss";
import { Select } from "../components/Select/Select";
import { UserContext } from "../context/UserContext"

export const ReservationPage = () => {
    const { userData } = useContext(UserContext);
    const [selectedPrice, setSelectedPrice] = useState("normal");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [hotel, setHotel] = useState("");
    const [roomType, setRoomType] = useState("");
    const [guest, setGuest] = useState("");
    const [CheckInDate, setCheckInDate] = useState("");
    const [CheckOutDate, setCheckOutDate] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handlePriceChange = (value) => {
        setSelectedPrice(value);
    };

    const submitReservationData = () => {
        setError("");
        setSuccessMessage("");

        const body = new URLSearchParams();
        body.append("user_id", userData?.user.id || "");
        body.append("hotel_id", hotel);
        body.append("room_id", roomType);
        body.append("is_flex", selectedPrice === "flex" ? "1" : "0");
        body.append("num_persons", guest);
        body.append("checkin", CheckInDate);
        body.append("checkout", CheckOutDate);
        body.append("firstname", firstname);
        body.append("lastname", lastname);
        body.append("email", email);
        body.append("phone", telephoneNumber);
        body.append("comment", comment);

        const options = {
            method: "POST",
            body: body,
            redirect: "follow",
        };

        fetch("http://localhost:4000/reservations", options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Server error: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("API Response:", data);
                setSuccessMessage(`Din booking er gennemført, ${firstname}!`);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setError(err.message || "Noget gik galt, prøv igen.");
            });
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
                                { value: "1", label: "Overlook Aalborg City" },
                                { value: "2", label: "Overlook Aalborg Øst" },
                                { value: "3", label: "Overlook Grand Marina" },
                                { value: "4", label: "Overlook Seurahuone Helsinki" },
                                { value: "5", label: "Overlook Grand Marina" },
                                { value: "6", label: "Overlook Webers" },
                                { value: "7", label: "Overlook Copenhagen" },
                            ]}
                            action={setHotel}
                        />
                        <Select
                            placeholder={"Vælg værelsestype"}
                            options={[
                                { value: "1", label: "Economy" },
                                { value: "2", label: "Junior Suite" },
                                { value: "3", label: "Presidental Suite" },
                                { value: "4", label: "Standard" },
                                { value: "5", label: "Superior" },
                                { value: "6", label: "Superior Plus" },
                            ]}
                            action={setRoomType}
                        />
                        <Select
                            placeholder={"Vælg antal person"}
                            options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                                { value: "6", label: "6" },
                            ]}
                            action={(value) => setGuest(value)}
                        />
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
                            action={setCheckInDate}
                        />
                        <InputField
                            type="date"
                            labelText="Check-out dato"
                            name="checkOut"
                            id="checkOutDateField"
                            action={setCheckOutDate}
                        />
                        <InputField
                            type="tel"
                            placeholder="Telefon"
                            name="telefonNumber"
                            id="telefonField"
                            action={setTelephoneNumber}
                        />
                        <textarea
                            name="commentBox"
                            id="commentField"
                            cols="30"
                            rows="10"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </form>
                    <button onClick={submitReservationData}>Send Reservation</button>
                    {successMessage && <p>{successMessage}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </MarginContainer>
                <MarginContainer />
            </GridContainer>
        </>
    );
};
