import './App.css';
import Header from './modules/header/header';
import FiltersEditor from './modules/ScenarioField/ProductionField';

function App() {
  return (
    <div className="App flex h-screen bg-zinc-100">

        <div className='flex-1'>
          <FiltersEditor />
        </div>
    </div>
  );
}

export default App;