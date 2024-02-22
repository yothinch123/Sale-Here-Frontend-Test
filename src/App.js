import React from "react";

const ChatRoom = React.lazy(() => import('./chat-room'))



const App = () => {
  return (
    <React.Suspense fallback={false}>
      <ChatRoom />
    </React.Suspense>
  )
};

export default App;
