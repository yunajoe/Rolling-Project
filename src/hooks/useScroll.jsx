import { useEffect, useMemo, useRef, useState } from "react";

const useScroll = () => {
  const [Isvisible, setIsVisible] = useState(false);
  const myRef = useRef();

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
  }, []);
  useEffect(() => {
    if (myRef.current) {
      observer.observe(myRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [Isvisible, myRef.current]);

  return {
    Isvisible,
    setIsVisible,
    myRef,
  };
};

export default useScroll;
