import { useEffect, useState } from "react";

/**
 * 지정된 최대 너비보다 창의 너비가 작거나 같은지 여부를 반환합니다.
 * @param {number} maxWidth - 최대 너비 값
 * @returns {boolean} 최대 너비보다 창의 너비가 작거나 같은 경우 true를 반환합니다.
 */
const useWindowWidthCheck = (maxWidth) => {
  const [isWidthLessThanOrEqual, setIsWidthLessThanOrEqual] = useState(
    window.innerWidth <= maxWidth,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWidthLessThanOrEqual(window.innerWidth <= maxWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]);

  return isWidthLessThanOrEqual;
};

export default useWindowWidthCheck;
