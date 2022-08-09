import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Greeting from "./Greeting";
import { Provider } from 'react-redux';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
          <Router>
            <Switch>
              <Route  path="/" element={<Greeting />}/>
            </Switch>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
