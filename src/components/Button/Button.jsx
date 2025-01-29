import s from "./Button.module.scss";

export const Button = ({ color, size, title, children, custom, action }) => {
  return (
    <button
      className={`${s.buttonStyling} ${style[size]} ${style[color]} ${style[custom]}`}
      onClick={action}
    >
      {title}
      {children}
    </button>
  );
};