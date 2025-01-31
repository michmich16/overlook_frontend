import { useParams } from "react-router-dom"
import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Slider } from "../components/Slider/Slider";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { RoomCard } from "../components/RoomCard/RoomCard";

export const HotelPage = () => {
    const { country, city, hotel } = useParams()
    const { isLoading, error, data } = useGet(`http://localhost:4000/destinations/${country}/${city}/${hotel}`);
    console.log(data)

    return (
        <>
            <Slider text="HOTELLER & DESTINATIONER" height="400px" />
            <GridContainer columns="3fr 1fr">
            <MarginContainer border="1px solid grey" margin="1rem" height="auto">
                    {!isLoading && data?.cities[0]?.hotels[0]?.rooms?.map((room) => (
                        <RoomCard
                            key={room.slug}
                            name={room.title}
                            link={room.slug}
                            info={`${room.area} Plads til ${room.num_persons} personer.`}
                            description={room.description}
                            image={`/images/${room.images[0].filename}`}
                            path={`/city/${room.slug}`}
                            price={`Fra ${room.day_price_normal},00 DKK`}
                        />
                    ))}
                </MarginContainer>
                <MarginContainer></MarginContainer>
            </GridContainer>
        </>
    )
}