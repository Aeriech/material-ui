import './App.css';
import React, { lazy, Suspense } from 'react';
const Login = lazy(() => import('./Components/Login'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
     <Login show={true}/>
     </Suspense>
    </div>
  );
}

export default App;
