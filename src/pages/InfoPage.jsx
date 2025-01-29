import { FilterBar } from "../components/FilterBar/FilterBar";
import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { Slider } from "../components/Slider/Slider";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { NewsCard } from "../components/NewsCard/NewsCard";

export const InfoPage = () => {
    const [selectedCountry, setSelectedCountry] = useState("danmark");
    const { data, isLoading, error } = useGet(`http://localhost:4000/destinations/${selectedCountry}`);
    const handleFilterChange = (country) => {
        setSelectedCountry(country);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading destinations for {selectedCountry}.</p>;
    }

    return (
        <>
            <Slider text="HOTELLER & DESTINATIONER" height="400px" />
            <FilterBar
                filters={["danmark", "sverige", "norge", "finland", "island", "tyskland", "polen"]}
                onFilterChange={handleFilterChange}
            />

            <MarginContainer>
                {data && (
                    <SectionTitle title={`Vores hotel i ${data.name}`} />
                )}
                <GridContainer columns="1fr 1fr 1fr" gap="2rem">
                    {data?.cities.map((city) => (
                        <NewsCard
                            key={city.city_id}
                            title={city.name}
                            link={city.slug}
                            img={`./images/${city.CityImage.city_image_filename}`}
                        />
                    ))}
                </GridContainer>
            </MarginContainer>
        </>
    );
};
