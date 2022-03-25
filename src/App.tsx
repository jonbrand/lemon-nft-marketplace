import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;

