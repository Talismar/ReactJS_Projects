import React from 'react';
import ImageSlider from './Components/ImageSlider';
import "./App.css"

function App() {

  const slides = [
    {url: "https://source.unsplash.com/random/?background&1", title: "Random"},
    {url: "https://source.unsplash.com/random/?background&2", title: "Random"},
    {url: "https://source.unsplash.com/random/?background&3", title: "Random"},
    {url: "https://source.unsplash.com/random/?background&4", title:"Random"}
  ]

  return (
    <main>
      <section className='header'>
        <h1>Slider - ReactJS</h1>
      </section>

      <div className='containerStyles'>
        <ImageSlider slides={slides} />
      </div>
    </main>
    
  );
}

export default App;
