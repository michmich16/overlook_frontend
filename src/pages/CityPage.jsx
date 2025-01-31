import { useParams } from "react-router-dom"
import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Slider } from "../components/Slider/Slider";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { NewsCard } from "../components/NewsCard/NewsCard";

export const CityPage = () => {
    const { country, city } = useParams()
    const { isLoading, error, data } = useGet(`http://localhost:4000/destinations/${country}/${city}`);
    console.log(data)

    return (
        <>
            <Slider text="HOTELLER & DESTINATIONER" height="400px" />
            <MarginContainer>
                <GridContainer columns="1fr 1fr 1fr" gap="2rem">
                    {!isLoading && data?.cities[0]?.hotels?.map((hotel) => (
                        <NewsCard
                            key={hotel.slug}
                            title={hotel.title}
                            link={hotel.slug}
                            img={`/images/${hotel.HotelImage.hotel_image_filename}`}
                            path={`/city/${hotel.slug}`}
                        />
                    ))}
                </GridContainer>
            </MarginContainer>
        </>
    )
}