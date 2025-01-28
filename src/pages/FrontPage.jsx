import { Slider } from '../components/Slider/Slider';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { NewsCard } from '../components/NewsCard/NewsCard';
import { useGet } from '../hooks/useGet';

export const FrontPage = () => {

    // `http://localhost:4000/destinations/${country_slug}/${city_slug}/${hotel_slug}/${room_slug}`
    // http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard

    // Fetch news
    const { data: newsData, isLoading: isLoadingNews, error: errorNews } = useGet(`http://localhost:4000/news`);

    // Fetch rooms
    const { data: standardRoomsData, isLoading: isLoadingStandardRooms, error: errorStandardRooms } = useGet(`http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard`);
    const { data: superiorRoomsData, isLoading: isLoadingSuperiorRooms, error: errorSuperiorRooms } = useGet(`http://localhost:4000/destinations/polen/gdansk/overlook-gdansk/superior`);
    const { data: presidentalRoomsData, isLoading: isLoadingPresidentalRooms, error: errorPresidentalRooms } = useGet(`http://localhost:4000/destinations/tyskland/berlin/overlook-berlin-potsdamer-platz/presidental-suite`);
    return (
        <>
            <Slider text={"VELKOMMEN TIL HOTEL OVERLOOK ONLINE"}/>
            {/* Section for News */}
            <MarginContainer >
                <SectionTitle title="Sidste nyt" />
                <GridContainer columns="1fr 1fr 1fr" gap="2rem">
                    {!isLoadingNews && newsData?.slice(0, 3).map((item) => (
                        <NewsCard
                            key={item.id}
                            title={item.title}
                            link={item.id}
                            img={`./images/${item.image.filename}`}
                            text={item.teaser}
                        />
                    ))}
                </GridContainer>

                {/* Section for Rooms */}
                <SectionTitle title="Se vores udvalg af værelser" />
                <GridContainer columns="1fr 1fr 1fr" gap="2rem">
                    {!isLoadingStandardRooms &&
                        standardRoomsData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                            return (
                                <NewsCard
                                    key={room.title}
                                    title={room.title}
                                    link={room.id}
                                    img={`./images/${room.images[0]?.filename}`}
                                    text={room.description}
                                />
                            );
                        })}
                    {!isLoadingSuperiorRooms &&
                        superiorRoomsData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                            return (
                                <NewsCard
                                    key={room.title}
                                    title={room.title}
                                    link={room.id}
                                    img={`./images/${room.images[0]?.filename}`}
                                    text={room.description}
                                />
                            );
                        })}
                    {!isLoadingPresidentalRooms &&
                        presidentalRoomsData?.cities?.[0]?.hotels?.[0]?.rooms?.map((room) => {
                            return (
                                <NewsCard
                                    key={room.title}
                                    title={room.title}
                                    link={room.id}
                                    img={`./images/${room.images[0]?.filename}`}
                                    text={room.description}
                                />
                            );
                        })}
                </GridContainer>
            </MarginContainer>
        </>
    );
};
