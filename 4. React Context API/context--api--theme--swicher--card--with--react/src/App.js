
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {

  const [themeMode, setThemeMode] = useState("light");  //by default "light" mode

  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }
  useEffect(() => {
    const selectedHtmlDOC = document.querySelector('html'); //removed light & dark class from  HTML doc,
    selectedHtmlDOC.classList.remove("light", "dark")
    selectedHtmlDOC.classList.add(themeMode); /// added thge clasases on the base of themeMode....

  }, [themeMode])


  //Do not forget to change darkMode: "class" in tailwind.config.js ----> bcz it will change the doc theme base on class 
  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>

  );
}

export default App;
