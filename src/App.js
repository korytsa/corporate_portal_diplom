import {BrowserRouter} from "react-router-dom";
import Container from "./component/container/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </>
  );
}

export default App;
