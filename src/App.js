import { Switch, Route } from "react-router-dom";
import Pages from "./component/Pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Pages />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="#" component={Blogs} />
        <Route path="#" component={Projects} />
        <Route path="#" component={About} />
        <Route path="#" component={Contact} />
      </Switch> */}
    </>
  );
};
export default App;
