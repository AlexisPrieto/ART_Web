import Api from './Api';

async function ApiCapacitaciones() { 
    let ret = false
    const token = null;
    const body = ''


    try {
        const response = await Api.get(`api/Capacitaciones/Listar`,{
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Capacitaciones Listar: ',response.data);
                
        return response
    
    }
    catch (error) {
        console.log('[Capacitaciones Listar error]: ' + error);
    } 

    return ret
}

export default ApiCapacitaciones;