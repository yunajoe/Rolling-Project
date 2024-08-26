import { useState } from "react";

const useDropdown = ({ init, arr }) => {
  const [value, setValue] = useState(init);

  return { value, setValue, arr };
};

export default useDropdown;
