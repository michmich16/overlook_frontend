import s from './Select.module.scss';

export const Select = ({ options = [], placeholder, action }) => {
    return (
        <select
            id="custom-select"
            className={s.select}
            onChange={(e) => action(e.target.value)}
        >
            <option value="" disabled selected>
                {placeholder}
            </option>
            {options.map((option, index) =>
                typeof option === 'object' ? (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ) : (
                    <option key={index} value={option}>
                        {option}
                    </option>
                )
            )}
        </select>
    );
};
