import React from 'react';
import Navbar from "./components/Navbar";
import ImageAnalysis from "./components/ImageAnalysis"
import SearchForm from "./components/SearchForm";
import ImageAnalysisProvider from './contexts/ImageAnalysisContext';


function App() {
  return (
    <div className="App">
      <Navbar />

      <ImageAnalysisProvider>
        <ImageAnalysis />
        <SearchForm />
      </ImageAnalysisProvider>

    </div>
  );
}

export default App;
