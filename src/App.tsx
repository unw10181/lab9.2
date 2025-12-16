import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-grey-50">
        <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
      </div>
    </>
  );
}

export default App;
