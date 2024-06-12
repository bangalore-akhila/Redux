import './App.css';
import { Provider } from 'react-redux';
import Store from './Components/Store/empStore';
import Shop from './Components/Shop';
import UserDetails from './Components/User';
import Employee from './Components/Emp/emp';
function App() {
  return (
    <Provider store = {Store}>
    <div className="App">
      {/* <Shop />
      <UserDetails /> */}
      <Employee />
    </div>
    </Provider>
  );
}

export default App;
