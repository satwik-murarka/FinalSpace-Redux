import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import UserContainer from './components/UserContainer'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
