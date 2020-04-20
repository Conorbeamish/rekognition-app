import React from 'react';
import Navbar from "./components/Navbar";
import ImageAnalysisProvider from './contexts/ImageAnalysisContext';
import IsLoadingContextProvider from './contexts/IsLoadingContext';
import Homepage from "./components/Homepage.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <IsLoadingContextProvider>
        <ImageAnalysisProvider>
          <Homepage />  
        </ImageAnalysisProvider>
      </IsLoadingContextProvider>
    </div>
  );
}

export default App;
