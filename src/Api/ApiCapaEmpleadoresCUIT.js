import Api from './Api';

async function ApiCapaEmpleadoresCUIT(cuit) { 
    let ret = false
    const token = null;
    const body = ''

    console.log('cuit: ' + cuit)


    try {
        const response = await Api.get(`CapacitacionesEmpleador/ListarPorCUIT?pCUIT=${cuit}`,{
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('ApiCapaEmpleadoresCUIT: ',response.data)
                
        return response
    
    }
    catch (error) {
        console.log('[ApiCapaEmpleadoresCUIT] error: ' + error);
    } 

    return ret
}

export default ApiCapaEmpleadoresCUIT;