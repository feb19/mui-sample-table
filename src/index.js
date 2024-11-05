import { createRoot } from 'react-dom/client';
import React from 'react';
import UserTable from "./components/UserTable";


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App tab="home" />);
}, false);

function App() {
  return (
    <div>
      <h1>User Table</h1>
      <UserTable />
    </div>
  );
}

export default App;
