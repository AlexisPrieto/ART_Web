import React, { Component } from 'react'

export class Contacto extends Component {
    render() {
        return (
            <div className="App">
            <p>ART Mutual Rural - Contacto</p>
            <div>
            <form action="/action_page.php">    
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email..." />
            <br/>
            <label>Asunto</label>
            <input type="text" id="asunto" name="asunto" placeholder="Asunto" />    
            <br/>
            <label>Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje..."></textarea>
            <br/>
            <input type="submit" value="Enviar" />
            </form>
            </div>
            </div>
          );
    }
}

export default Contacto

