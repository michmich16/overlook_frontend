import style from "./FilterBar.module.scss";

export const FilterBar = ({ filters, onFilterChange }) => {
    return (
        <div className={style.filterBar}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={style.filterButton}
                    onClick={() => onFilterChange(filter)} // Call the handler with the selected filter
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};
