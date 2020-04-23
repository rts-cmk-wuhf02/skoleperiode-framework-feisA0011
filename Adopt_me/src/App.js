import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt ME!"),
    React.createElement(Pet, {
      name: "Aiko",
      animal: "Dog",
      breed: "Japanese Akita",
    }),
    React.createElement(Pet, {
      name: "ryan",
      animal: "Cat",
      breed: "African cat",
    }),
    React.createElement(Pet, {
      name: "pew",
      animal: "rat",
      breed: "ratatta",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
