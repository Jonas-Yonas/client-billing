import './App.css';
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Topbar from './components/topbar/Topbar';
import { useStepper } from './store/store';

function App() {
  const { state } = useStepper();

  return (
    <div className="container">
      <Header />
      {state.step === 2 && <Alert />}
      {state.step === 4 && <Topbar />}
      <Main {...state} />
    </div>
  );
}

export default App;
