import clsx from "clsx";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  as,
  to,
  className,
  shape,
  direction,
  color,
  size,
  mobile,
  width,
  children,
  onClick,
  onBlur,
  onMouseDown,
  type = "submit",
  disabled,
}) => {
  const buttonClassName = clsx(
    styles["button"],
    styles[shape],
    styles[`${direction}Arrow`],
    styles[`${color}`],
    styles[`size${size}`],
    mobile ? styles.mobile : "",
    className,
  );

  const buttonWidth = { width: `${width}rem` };

  if (as === "Link") {
    return (
      <Link className={buttonClassName} style={buttonWidth} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      style={buttonWidth}
      className={buttonClassName}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

export default Button;
