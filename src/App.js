import './App.css';
import Weather from './components/Weather';
import { SehirProvider } from './context/SehirContext';
import List from './components/List';
function App() {
  return (
    <SehirProvider>
      <Weather/>
      <List/>
    </SehirProvider>
  );
}

export default App;
