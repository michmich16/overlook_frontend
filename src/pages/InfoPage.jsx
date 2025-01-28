import { FilterBar } from "../components/FilterBar/FilterBar"

export const InfoPage = () =>{
    return(
        <>
        <FilterBar filters={["Danmark", "Sverige", "Norge", "Finland", "Island", "Tyskland", "Polen"]}/>
        </>
    )
}