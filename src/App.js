import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
          >
            Anna Kokozei
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnnKoko/r-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://master--sensational-pegasus-bda3c4.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
