import Api from './Api';

async function ApiRegistrarAcredito(Acredita) { 
    let ret = false
    const body = JSON.stringify(Acredita)
    const token = null;
    console.log('body: ApiRegistrarAcredito: ' + body)

    try {
        
        const response = await Api.post(`CapacitacionesEmpleador/Guardar`, body, {
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Post ApiRegistrarAcredito: ',response.data)
                
        return response
    
    }
    catch (error) {
        console.log('Post error ApiRegistrarAcredito: ' + error);
    } 

    return ret
}

export default ApiRegistrarAcredito;