import ListGroup from "./components/ListGroup";
let items = ["NY", "SF", "London", "Paris", "Tokyo"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
