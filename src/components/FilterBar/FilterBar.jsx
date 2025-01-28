import s from "./FilterBar.module.scss";

export const FilterBar = ({ filters, onFilterSelect }) => {
    return (
        <div className={s.filterBarStyle}>
            <ul>
                {filters.map((filter) => (
                    <li
                        key={filter}
                        onClick={() => onFilterSelect(filter)}
                        className={s.filterItem}
                    >
                        {filter}
                    </li>
                ))}
            </ul>
        </div>
    );
};