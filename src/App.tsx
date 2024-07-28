import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Contact } from "./pages/Contact.js";
import { NotFound } from "./pages/NotFound.js";
import { Category } from "./pages/Category.js";
import { Recipe } from "./pages/Recipe.js";

function App() {
  return (
    <>
      <Router basename="/react_project_food">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
