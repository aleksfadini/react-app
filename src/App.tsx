import Button from "./components/Button";
const handleClickedItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")} color="secondary">
        My Button
      </Button>
    </div>
  );
}

export default App;
