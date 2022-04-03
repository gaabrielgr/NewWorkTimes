import React, { useContext } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styleCarousel from "./Carousel.module.css";
import arrow from "../imgs/arrow.png";
import { ContextApi } from "../context/ContextApi";
import moment from "moment";
const Carousel = ({ sections }) => {
  const { setInfoDetails } = useContext(ContextApi);
  const carousel = useRef(null);
  const navigate = useNavigate();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  function formatDate(date) {
    return moment(date).format("MMMM D, YYYY");
  }

  return (
    <div className={styleCarousel.container}>
      <div className={styleCarousel.carousel} ref={carousel}>
        {sections.map((item) => {
          return (
            <div className={styleCarousel.item} key={item.uri}>
              {item.multimedia !== null ? (
                <Link
                  to={`/details/${item.uri.split("/")[3]}`}
                  onClick={() => {
                    navigate("/details");
                    setInfoDetails(item);
                  }}
                >
                  <img
                    className={styleCarousel.imgCarousel}
                    src={item.multimedia[1].url}
                  />
                </Link>
              ) : (
                ""
              )}

              <div className={styleCarousel.info}>
                <span className={styleCarousel.name}>{item.title}</span>
                <span className={styleCarousel.price}>
                  {formatDate(item.published_date)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {sections.length > 4 ? (
        <div className={styleCarousel.buttons}>
          <button
            className={styleCarousel.buttonLeft}
            onClick={handleLeftClick}
          >
            <img className={styleCarousel.left} src={arrow} alt="Scroll Left" />
          </button>
          <button
            className={styleCarousel.buttonRight}
            onClick={handleRightClick}
          >
            <img src={arrow} alt="Scroll Right" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
