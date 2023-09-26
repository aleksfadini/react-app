import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    // <>
    /* {showAlert === true ? (
        <div>
          <Alert> Hey! Close this</Alert>
        </div>
      ) : null} */
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Click me</Alert>}
      <Button
        onClick={() => {
          setShowAlert(true);
        }}
      >
        My Button
      </Button>
    </div>
    // </>
  );
}

export default App;
