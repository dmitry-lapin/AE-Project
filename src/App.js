import './App.css';
import Header from './modules/header/header';
import BlockEditor from './modules/ScenarioField/ScenarioField';

function App() {
  return (
    <div className="App flex h-screen bg-zinc-100">
        <Header />
        <div className='flex-1'>
          <BlockEditor />
        </div>
    </div>
  );
}

export default App;