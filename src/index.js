import React from 'react';
import ReactDOM from 'react-dom/client';
import CourseListContainer from "./components/CourseListContainer";
import "./App.css";

function ThemeSwitch() {
  const [isLight, setTheme] = React.useState(true);

  React.useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css"
    link.rel = "stylesheet"
    link.href = (isLight? "./App.css" : "./App-dark.css");

    head.appendChild(link);
    return () => { head.removeChild(link); }
  }, [isLight]);

  return (
    <div className="ThemeSwitch">
        <button id="switch" onClick={() => setTheme(!isLight)}>{isLight? "Dark Theme" : "Light Theme"}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeSwitch />
    <CourseListContainer />
  </>
);

