import { useState } from "react";

// {items; {}, heading: string}

// this is really a type of argument for a function
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

// we pass it as a typed argument
// function ListGroup(props: Props) {
// destructered into items, heading
function ListGroup({ items, heading, onSelectedItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // This empty tag indicates a Fragment, needed to use multiple elements
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {/* or more concise verion: */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
