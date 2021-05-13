import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Sub from "./pages/Sub";
import BottomNav from "./components/BottomNav";
import Appbar from "./components/Appbar";
import Rank from "./pages/Rank";

function App() {
  return (
    <>
	  <Router>
      <Appbar />
      <Switch>
        <Route path="/ranking" component={Rank}></Route>
        <Route path="/sub" component={Sub}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
      <BottomNav/>
    </Router>
	</>  
  );
}

export default App;
