import React, {useState} from 'react';
import style from "./styles.module.css"

function ImageSlider({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 
                                        : currentIndex - 1

    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1  ? 0 
                                        : currentIndex + 1

    setCurrentIndex(newIndex)
  }

  const goToSlide = (Newindex) => {
    setCurrentIndex(Newindex)
  }

  return (
    <div className={style.sliderStyles}>
      <div className={style.leftArrowStyles} onClick={goToPrevious}>
        <i style={{fontSize: "80px"}} className='material-icons'>keyboard_arrow_left</i>
      </div>
      <div className={style.rightArrowStyles} onClick={goToNext}>
        <i style={{fontSize: "80px"}} className='material-icons'>keyboard_arrow_right</i>
      </div>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className={style.slideStyles}></div>

      
      <div className={style.dotsContainerStyles}>
        {slides.map((slide, index) => {
          return (
                  <div key={index} className={style.doStyles} onClick={() => goToSlide(index)}>
                  
                    {
                      index === currentIndex ? <i style={{color: "#fff"}} className='material-icons'>lens</i>
                      : <i style={{color: "#000"}} className='material-icons'>lens</i>
                    }
                       
                  </div>
                 ) 
        })}
      </div>
      
    </div>

  );
}

export default ImageSlider;