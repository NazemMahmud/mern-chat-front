import React, {useEffect} from "react";
import Pusher from "pusher-js";

import axios from "./config/axios.js";
import './App.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Chat from "./components/Chat/Chat";

function App() {
    useEffect(() => {
        // no dependency, run once
        const pusher = new Pusher('42c0d3dbf431edb54c57', {
            cluster: 'mt1'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function(data) {
            alert(JSON.stringify(data));
        });
    }, []);

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
