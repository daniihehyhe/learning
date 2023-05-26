//import { useEffect } from 'react'
//import useLocalStroage from './useLocalStorage'



//function useDarkMode() {
//	const [darkMode, setDarkMode] = useLocalStroage("dark-mode", "light")

//useEffect(() => {
//  const className ="dark"
//  const bodyClass = window.document.body.classList;

//  darkMode === "dark"
//  ? bodyClass.add(className)
//  : bodyClass.remove(className);
//}, [darkMode]);
//  return [darkMode, setDarkMode]
//}

//export default useDarkMode;

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage<string>("dark-mode", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    if (darkMode) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
