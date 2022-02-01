import Api from './Api';

async function ApiLogin(user,cuit,psw) { 
    let ret = false
    const body = JSON.stringify(psw)
    const token = null;
    console.log('body: ' + body)
    console.log('cuit: ' + cuit)
    console.log('psw: ' + psw)

    try {
        const response = await Api.post(`UsuariosWeb/Login?pUsuario=${user}&pCUIT=${cuit}`, body, {
            headers: {
                'Content-Type': 'application/json',
                 //Authorization: `Bearer ${token}`,
            }            
        })
        console.log('Post User y psw: ',response.data)
                
        return response
    
    }
    catch (error) {
        console.log('[CapacitacionLogin]: ' + error);
    } 

    return ret
}

export default ApiLogin;