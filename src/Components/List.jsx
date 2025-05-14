import { React, useState } from "react";
// import data from "./ListData.json";
import data from "../search_utf_test.json";

function List(props) {
  const filteredData = data.filter((el) => {
    //if no input the return the original

    if (props.input === "") {
      return el;
    }

    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {/* {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))} */}
      {filteredData.map((item) => (
        <li key={item.id}>
          <a
            href={item.url}
            without
            rel="noopener noreferrer internal"
            target="_blank"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
