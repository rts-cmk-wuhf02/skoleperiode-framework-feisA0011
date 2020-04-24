import React from "react";
export default function Pet({ name, animal, breed, color }) {
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  // ]);

  return (
    <div>
      <h1>Name: {name}</h1>
      <img src="https://picsum.photos/200" />
      <h2>{animal}</h2>
      <h2>{breed}</h2>
      <h3>{color} </h3>
      <form>
        <input placeholder="Comment here" />
      </form>
    </div>
  );
}
