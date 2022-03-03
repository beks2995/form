import React from 'react';
import FirstStepPage from "./pages/firstStep/FirstStepPage";

function App(): JSX.Element {
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <FirstStepPage/>
        </div>
      </div>
    </div>
  );
}

export default App;