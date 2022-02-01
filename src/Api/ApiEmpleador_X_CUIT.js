import Api from './Api';

async function ApiEmpleador_X_CUIT(pCuit) { 
    let ret = false
    const token = null;
    
    try {
        const response = await Api.get(`ReferenteDatos/ListarPorCuit?pCuit=${pCuit}`,{
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Get Empleador: ',response.data);
                
        return response
    
    }
    catch (error) {

        console.log('api. ERROR ApiEmpleador_X_CUIT!'+ error);

    } 

    return ret
}

export default ApiEmpleador_X_CUIT;