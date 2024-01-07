import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './utills/store';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserCard/>
      </Provider>

    </div>
  );
}

export default App;
