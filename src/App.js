import Main from "./components/main";
import TextEditor from "./components/text-editor";

function App() {
  return (
    <div className="App container-flex">
      <header className="App-header container-flex">
        <Main />
      </header>
      <TextEditor />
    </div>
  );
}

export default App;
