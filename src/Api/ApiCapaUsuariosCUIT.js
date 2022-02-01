import Api from './Api.js';

async function ApiCapaUsuariosCUIT(cuit,capaId) { 
    let ret = false
    const token = null;
    const body = ''
    console.log('capaId: ' + capaId)
    console.log('cuit: ' + cuit)


    try {
        const response = await Api.get(`CapacitacionesUsuarios/ListarPorEmpresa?pCUIT=${cuit}`,{
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('ApiCapaUsuariosCUIT: ',response.data)
                
        return response
    
    }
    catch (error) {
        console.log('error [ApiCapaUsuariosCUIT]: ' + error);
    } 

    return ret
}

export default ApiCapaUsuariosCUIT;