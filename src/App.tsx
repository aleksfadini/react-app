import Button from "./components/Button";
const handleClickedItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      <Button text={"Click Me"} onClickedBtn={handleClickedItem}></Button>
    </div>
  );
}

export default App;
