import { Switch, Route } from "react-router-dom";
import Pages from "./component/Pages";
import "./App.css";
import Home from "./component/Home";
// const Home = () => <h2>You are in the Home</h2>;
// const Blogs = () => <h2>You are in the Blogs</h2>;
// const Projects = () => <h2>You are in the Projects</h2>;
// const About = () => <h2>You are in the About</h2>;
// const Contact = () => <h2>You are in the Contact</h2>;
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
      <Home />
    </>
  );
};
export default App;
