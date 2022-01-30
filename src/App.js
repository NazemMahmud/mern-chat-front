import './App.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <div className="main__body"> 
        <LeftSidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
