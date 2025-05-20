import { React, useState } from "react";
// import data from "./ListData.json";
// import data from "../search_utf_test.json";
// import data from "../search_competences_utf_local_with_submenu_onedrive.json";
// import data from "../sd_source.json";
import data from "../html_sd_original.json";
// import data from process.env.PUBLIC_URL + '/search_competences_utf_local_with_submenu_onedrive.json';

function List(props) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [data, setData] = React.useState([]);
  // setData([...data, item]);

  const filteredData = data.filter((el) => {
    //if no input the return the original

    // console.log(props.input);

    if (props.input === "") {
      // setSearchTerm("");
      return el;
    }

    //return the item which contains the user input
    else {
      // console.log("props.input");
      console.log(props.input);
      // setSearchTerm(props.input);

      return el.text.toLowerCase().includes(props.input);
      // return el.text.toLowerCase().includes(searchTerm);
    }
  });
  console.log(filteredData);
  return (
    <ul>
      {/* {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))} */}
      {filteredData.map((item) => (
        <li key={item.del}>
          <a
            href={item.url}
            without
            rel="noopener noreferrer internal"
            target="_blank"
          >
            {item.text}
            {item.menu &&
              item.menu.map((i) => (
                <p
                  style={{
                    marginLeft: "30px",
                    lineHeight: "10px",
                    fontSize: "12px",
                  }}
                >
                  {i}
                </p>
              ))}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
