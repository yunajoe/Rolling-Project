import { useState } from "react";
import styles from "./Dropdown.module.css";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({ option }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        {option.value}
        <BiChevronDown size={20} className={open && styles.arrow__top} />
      </div>
      <ul className={open ? styles.ul__open : styles.ul__close}>
        {option.arr?.map((name) => {
          const handleClick = () => {
            if (name?.toLowerCase() !== option.value.toLowerCase()) {
              option.setValue(name);
              setOpen(false);
            }
          };

          return (
            <li key={name} className={styles.li} onClick={handleClick}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
