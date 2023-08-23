import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

const App= ()=> {
    return(
      <ChatEngine
        height="100vh"
        projectID="66601fa5-33a1-4c5f-930a-32d0234743bf"
        userName="JavascriptMastery"
        userSecret="123java"
        renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}></ChatFeed>}
      ></ChatEngine>
    );
}


export default App;