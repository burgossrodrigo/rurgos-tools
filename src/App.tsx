import './App.css';
import { AppProvider } from './state/Context'
import Price from './components/price/'


function App() {
  return (
    <AppProvider>
      <div className="App">
        Teste
        <Price />
      </div>
    </AppProvider>
  );
}

export default App;
