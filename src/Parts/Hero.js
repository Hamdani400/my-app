import React from 'react';
import ImgHeroFrame from 'assets/images/img/frame-img-hero.jpg';
import ImgHero from 'assets/images/img/img-hero.jpg';
import Fade from 'react-reveal/Fade';
import ic_cities from 'assets/images/icons/ic cities.svg';
import ic_traveller from 'assets/images/icons/ic traveller.svg';
import ic_treasures from 'assets/images/icons/ic treasures.svg';

import Button from 'Elements/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero (props) {
  function ShowMostPicked () {
    window.scrollTo ({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }
  return (
    <Fade bottom delay={50}>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-3" style={{width: 500}}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="font-weight-light text-gray-500 w-75"
              style={{lineHeight: '170%', marginBottom: 40}}
            >
              We provide what you need to enjoy your holiday with family. Time to
              make another memorable moments.
            </p>
            <Button
              className="btn px-4 py-2"
              isPrimary
              hasShadow
              onClick={ShowMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{marginTop: 80}}>
              <div className="col-auto mr-3">
                <img
                  src={ic_traveller}
                  alt={`${props.data.travelers} Travelers`}
                  style={{width: 32, height: 32}}
                />
                <h6 className="mt-3">
                  {formatNumber (props.data.travelers)}

                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto mr-3">
                <img
                  src={ic_treasures}
                  alt={`${props.data.treasures} Travelers`}
                  style={{width: 32, height: 32}}
                />
                <h6 className="mt-3">
                  {formatNumber (props.data.treasures)}

                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  src={ic_cities}
                  alt={`${props.data.cities} Travelers`}
                  style={{width: 32, height: 32}}
                />
                <h6 className="mt-3">
                  {formatNumber (props.data.cities)}

                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          ;<div className="col-6 pl-5">
            <div className="ml-4" style={{width: 520, height: 410}}>
              <img
                src={ImgHero}
                alt="Hotels For Your Holiday"
                className="img-fluid position-absolute"
                style={{
                  width: '95%',
                  height: '95%',
                  margin: '-30px  0 0 -30px',
                  zIndex: 1,
                }}
              />
              <img
                src={ImgHeroFrame}
                alt="Frames pict"
                className="img-fluid position-absolute"
                style={{
                  width: '95%',
                  height: '95%',
                  margin: '0  -15px -15px -15px',
                }}
              />
            </div>
          </div>

        </div>
      </section>
    </Fade>
  );
}
