import React from 'react';
import Navbar from "./components/Navbar";
import ImageAnalysis from "./components/ImageAnalysis"
import SearchForm from "./components/SearchForm";
import ImageAnalysisProvider from './contexts/ImageAnalysisContext';
import IsLoadingContextProvider from './contexts/IsLoadingContext';


function App() {
  return (
    <div className="App">
      <Navbar />
      <IsLoadingContextProvider>
        <ImageAnalysisProvider>
          <ImageAnalysis />
          <SearchForm />
        </ImageAnalysisProvider>
      </IsLoadingContextProvider>
    </div>
  );
}

export default App;
