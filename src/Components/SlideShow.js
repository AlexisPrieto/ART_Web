import React from 'react'
import {Slide} from 'react-slideshow-image'
import img1 from '../Assets/Img/img1.jpg'
import img2 from '../Assets/Img/img2.jpg'
import img3 from '../Assets/Img/Slide_Celular.jpg'
import '../Assets/Css/Slide.css'
import Logo from '../Assets/Img/LOGO_NARANJA.png';



const proprietes = {
    duration: 5000,
    transitionDuration: 600,
    infinite: true,
    indicators: true,
    arrows: true
}

const SlideShow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div className="text-slide" style={{'backgroundImage': 'url('+img1+')'}}>
                        <h1>
                            En todo el campo,
                             en todo el país
                        </h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="text-slide" style={{'backgroundImage': 'url('+img2+')'}}>
                        <h1>
                            En todo el campo,
                             en todo el país
                        </h1>
                    </div>

                </div>
                <div className="each-slide">
                    <div className="text-slide" style={{'backgroundImage': 'url('+img3+')', 'align-items': 'start'}}>
                    
                        <div style={{ 'height': '-webkit-fill-available', display: 'grid'}}>
                            <div>
                                <h1>
                                    Sumamos <br/>
                                    Herramientas
                                </h1>
                            </div>
                            <div style={{'place-self': 'center'}}>
                                <img style={{padding: '30% 35% 0% 0%'}}  
                                className="center header"  src={Logo}/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </Slide>
        </div>
    )
}

export default SlideShow;
