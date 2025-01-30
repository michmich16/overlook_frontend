import s from './Select.module.scss'

export const Select = ({ options = [], placeholder }) => {
    return (
        <select id="custom-select">
            <option value="" disabled selected>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.toLowerCase()}>
                    {option}
                </option>
            ))}
        </select>
    );
};