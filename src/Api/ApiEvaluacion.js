import Api from './Api';

async function ApiEvaluacion(pCapacitacionesId) { 
    let ret = false
    const body = JSON.stringify(pCapacitacionesId)
    const token = null;
    console.log('body_CapacitacionesPreguntas: ' + body)

    try {
        
        const response = await Api.get(`CapacitacionesPreguntas/ListarPorCapacitacion?pCapacitacionesId=${pCapacitacionesId}`, body, {
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Get Evaluacion: ',response.data);
                
        return response
    
    }
    catch (error) {
        
    } 

    return ret
}

export default ApiEvaluacion;