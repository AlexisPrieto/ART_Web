import React from 'react'
import {Slide} from 'react-slideshow-image'
import img1 from '../Assets/Img/img1.jpg'
import img2 from '../Assets/Img/img2.jpg'
import img3 from '../Assets/Img/img3.jpg'
import '../Assets/Css/Slide.css'



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
                            Protegiendo a la
                            gente que trabaja
                        </h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="text-slide" style={{'backgroundImage': 'url('+img2+')'}}>
                        <h1>
                            Protegiendo a la
                            gente que trabaja
                        </h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="text-slide"  style={{'backgroundImage': 'url('+img3+')'}}>
                        <h1>
                        Protegiendo a la
                            gente que trabaja
                        </h1>
                    </div>
                </div>
               
            </Slide>
        </div>
    )
}

export default SlideShow;
