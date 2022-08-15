import Clock from 'react-live-clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Welcome to My First React App</h2>
      <h3>The current time is: <Clock format={'HH:mm:ss'} ticking={true} timezone={'UK, GBR'} /></h3>
      <img src='https://picsum.photos/500' alt='random'></img>
    </div>
  );
}

export default App;
