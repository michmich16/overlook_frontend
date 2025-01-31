import style from "./FilterBar.module.scss";

export const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className={style.filterBar}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={style.filterButton}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
