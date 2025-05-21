// https://stackoverflow.com/questions/46793310/fetch-local-json-file-from-public-folder-reactjs
// import data from "./ListData.json";
// import data from "../search_utf_test.json";
// import data from "../search_competences_utf_local_with_submenu_onedrive.json";
// import data from "../sd_source.json";
import data from "../html_sd_original.json";
import categories from "../categories.json";
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
  // console.log(filteredData);

  const displayCategories = (cat) => {
    // console.log("cat");
    // console.log(cat);

    // return cat.toString();

    let filteredItems = [];
    let displayedItems = [];
    cat.map((c) => {
      filteredItems = categories.filter((item) => item.id === c);
      displayedItems.push({
        id: filteredItems[0].id,
        name: filteredItems[0].name,
      });
      // console.log("filteredItems");
      // console.log(filteredItems[0].id);
      // console.log(typeof filteredItems[0].id);
      // console.log(filteredItems[0].name);
      // console.log(typeof filteredItems[0].name);
    });
    console.log(displayedItems);

    displayedItems.map((item, i) => <p>{item.name.toString()}</p>);
    // return <p>{displayedItems[0].name}</p>;
    // Filter by id (e.g., id = 2)
    // const filteredItems = items.filter((item) => item.id === 2);
    // const filteredItems = categories.filter((item) => item.id === 2);

    // console.log(filteredItems);
  };
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
          </a>
          {/* {item.categories && <span>{item.categories.toString()}</span>} */}
          {item.categories && (
            <div>
              <p>{displayCategories(item.categories)}</p>
            </div>
          )}
          {item.menu &&
            item.menu.map((i) => (
              <a
                href={item.url}
                without
                rel="noopener noreferrer internal"
                target="_blank"
              >
                <div>
                  {i.categories && <span>category</span>}
                  <p
                    style={{
                      marginLeft: "30px",
                      lineHeight: "10px",
                      fontSize: "12px",
                    }}
                  >
                    {i}
                  </p>
                </div>
              </a>
            ))}
        </li>
      ))}
    </ul>
  );
}

export default List;
