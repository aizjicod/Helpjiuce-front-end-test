import Main from './components/main';
import TextEditor from './components/text-editor';
import Header from './components/header';

function App() {
  return (
    <div className="App container-flex">
      <header className="App-header container-flex">
        <Header />
        <Main />
      </header>
      <TextEditor />
    </div>
  );
}

export default App;
