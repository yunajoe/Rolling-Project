import { useState } from "react";

const useInput = ({ errorText = "" }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (value === "") {
      setErrorMessage(errorText);
    }
  };

  const handleFocus = () => {
    setErrorMessage("");
  };

  return {
    value,
    setValue,
    errorMessage,
    handleChange,
    handleBlur,
    handleFocus,
  };
};

export default useInput;
