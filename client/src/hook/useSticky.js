import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  
  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom/6
      ? setSticky(true)
      : setSticky(false)
  }

  // This function handles the scroll performance issue
  useEffect(() => {
    const debounce = (func, wait = 5, immediate = true) => {
      let timeOut
      return () => {
        let context = this,
          args = arguments
        const later = () => {
          timeOut = null
          if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
    window.addEventListener("scroll", debounce(handleScroll))
    // console.log('window.scrollY=',window.scrollY)
    // console.log('element.current.getBoundingClientRect()=',element.current.getBoundingClientRect().bottom/6)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [handleScroll])

  return { isSticky, element }
}

export default useSticky