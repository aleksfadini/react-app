import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div>
        <Alert> Hey! Close this</Alert>
      </div>
      <div>
        <Button onClick={() => Alert.setShowAlert(true)}>My Button</Button>
      </div>
    </>
  );
}

export default App;
