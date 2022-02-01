import Api from './Api';

async function ApiRegistrarCalificacion(Evaluacion) { 
    let ret = false
    const body = JSON.stringify(Evaluacion)
    const token = null;
    console.log('body_ApiRegistrarCalificacion: ' + body)

    try {
        
        const response = await Api.post(`CapacitacionesUsuarios/RegistrarCalificacion`, body, {
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Post Calificacion: ',response.data)
                
        return response
    
    }
    catch (error) {
        console.log('Post Calificacion: ' + error);
    } 

    return ret
}

export default ApiRegistrarCalificacion;