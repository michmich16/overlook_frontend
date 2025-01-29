import s from "./MarginContainer.module.scss";

export const MarginContainer = ({ children, border, margin, height }) => {
    const style = {
        ...(border && { borderRight: border }),
        ...(margin && { margin }),
        ...(height && {height}),
    };

    return (
        <div className={s.marginContainer} style={style}>
            {children}
        </div>
    );
};