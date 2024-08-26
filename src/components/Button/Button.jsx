import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({
  shape,
  direction,
  color,
  size,
  width,
  children,
  onClick,
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
      disabled={disabled}
      style={buttonWidth}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
