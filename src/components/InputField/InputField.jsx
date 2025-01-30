import style from "./InputField.module.scss";

export const InputField = ({ type, placeholder, name, labelText, action, custom,id, checked}) => {
    const onInputChange = (event) => {
        action(event.target.value);
      };
    
    return (
        <>
      {name && <label htmlFor={name}>{labelText}</label>}
      <input
        className={`${style.inputStyling} ${style[custom]}`}
        onChange={(event) => onInputChange(event)}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        checked={checked}
      />
      </>
    );
}