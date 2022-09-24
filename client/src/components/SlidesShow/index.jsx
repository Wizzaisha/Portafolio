import { useState } from "react";
import "./SlidesShow.css";

function SlidesShow ({images}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [galleryRange, setGalleryRange] = useState([...Array(4).keys()]);

    
    function goToPrevious() {
        const isFirstSlide = currentIndex === 0;

        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }

    function goToNext () {

        const isLastIndex = currentIndex === images.length - 1;

        const newIndex = isLastIndex ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    }

    function goToSlide (index) {
        setCurrentIndex(index);
    }

    function goGalleryPrev () {
        if (galleryRange[0] !== 0) setGalleryRange(galleryRange.map(e => e - 1));
    }

    function goGalleryNext () {
        if (galleryRange[3] !== images.length - 1) setGalleryRange(galleryRange.map(e => e + 1));
    }

    console.log(galleryRange);

    return (
        <div className="container">

            <div className="containerSlides">
                <div className="leftArrow" onClick={goToPrevious}>❮</div>
                <div className="righttArrow" onClick={goToNext}>❯</div>
                <div>
                    <img src={images[currentIndex]} alt="img" className="slideImg d-block w-100"></img>
                </div>
            </div>



            <div className="dotsContainer">
                <div className="leftArrowGallery" onClick={goGalleryPrev}>❮</div>
                <div className="righttArrowGallery" onClick={goGalleryNext}>❯</div>
                {galleryRange.map(i => {
                    return (
                        <div key={i} onClick={() => goToSlide(i)}>
                            <img src={images[i]} alt="img" className="galleryImg"></img>
                        </div>
                    )
                })}
            </div>
        
        </div>
    )
}


export default SlidesShow;