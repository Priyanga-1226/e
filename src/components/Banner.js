import React from 'react';
import '../Style/Banner.css'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  
   

  const goTomensWear = () => {
    navigate('/menswear');
  };
  const goTowomensWear = () => {
    navigate('/womenswear');
  };

  const goToKidsWear = () => {
    navigate('/kidswear');
  };
  return (
    <section className="banner" id='banner'>
      <div className="boxs container">
        <div className="box">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wXfg1RBoESXlLBG1H2P42Pp-GPTSjDq7pyX9evFk9u61sH0x" 
            alt="Must Haves 1" 
          />
          <div className="text">
            <span>Your Looks</span>
            <h5>Must Haves</h5>
            <button onClick={goToKidsWear}>KID'S</button>
          </div>
        </div>

        <div className="box">
          <img 
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmLm9UtoLssSWmobrzsGhTtAQJ-zn132MOF2oW0WssvwasQIAl" 
            alt="Must Haves 2" 
          />
          <div className="text">
            <span>Your Looks</span>
            <h5>Must Haves</h5>
            <button onClick={goTomensWear}>MEN'S</button>
          </div>
        </div>

        <div className="box">
          <img 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI7vWhgy-3brS_WKiVp6dHCppsvU0JS8MnAmbYmdmcI10c4Hm0" 
            alt="Must Haves 3" 
          />
          <div className="text">
            <span>Your Looks</span>
            <h5>Must Haves</h5>
            <button  onClick={goTowomensWear}>WOMEN'S</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
