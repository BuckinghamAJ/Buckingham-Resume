import { SUMMARY_TEXT_CAROUSEL_DATA } from "../static/constants";
import "../static/SummaryCarousel.css";
import { useState, useEffect } from "react";

function SummaryCarousel() {
  const [currentCarousel, setcurrentCarousel] = useState(0);

  const length = SUMMARY_TEXT_CAROUSEL_DATA.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentCarousel(
        currentCarousel === length - 1 ? 0 : currentCarousel + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [currentCarousel]);

  //setTimeout(next(), 20 * 1000);

  return (
    <>
      {SUMMARY_TEXT_CAROUSEL_DATA.map((carouselData, index) => (
        <div
          className={index === currentCarousel ? "slide active" : "slide"}
          key={index}
        >
          <h1>{carouselData.title}</h1>
          <hr className="carouselUnderline"></hr>
          {carouselData.split ? (
            <div
              className="splitParagraph text-wrap"
              style={{ columnCount: carouselData.columns }}
            >
              {carouselData.data.split(",").map((singleItem) => (
                <div className="fs-5 singleItem">{singleItem}</div>
              ))}
            </div>
          ) : (
            <p className="fs-5 summaryParagraph">{carouselData.data}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default SummaryCarousel;
