import React, { Component } from 'react'
import Autoridades1 from '../../Assets/Img/Autoridades.jpg';

export class Autoridades extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    componentDidUpdate(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                

                
                {/* <p> */}
                    <img src={Autoridades1} style={{objectFit: 'cover', width: '100%'}}/>    
                    
                {/* </p> */}
                
            </div>
        )
    }
}

export default Autoridades
