import SignUpFormPages from "./pages/SignUpForm";
import { Route , Switch } from 'react-router-dom';
import LoginFormPage from "./pages/LoginForm";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact>
      <SignUpFormPages />
      </Route>
      <Route path="/login-page">
      <LoginFormPage />
      </Route>
      <Route>
        <HomePage path="/home-page" />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
