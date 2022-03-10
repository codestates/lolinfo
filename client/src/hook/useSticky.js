import { useEffect, useState, useRef, useCallback } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = useCallback(() => {
    window.scrollY > 99 ? setSticky(true) : setSticky(false);
  });
  const debounce = useCallback((func, wait = 5, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  });
  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll, debounce]);

  return { isSticky, element };
}

export default useSticky;
