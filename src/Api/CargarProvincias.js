import Api from './Api';

async function CargarProvincias() {
    let provincias = [];

    try {
        const response = await Api.get(`Provincias/Listar_Provincias`)
        //console.log('response.data: ' + response.data) 
        response.data.map(provincia => {            
            provincias.push({Interno: provincia.Interno, ProvinciaDGI: provincia.PROVINCIADGI, Nombre: provincia.NOMBRE})
            return provincia
        })      
    }
    catch (error) {
        console.log('[Listar_Provincias]: ' + error);
    } 

    return provincias
}

export default CargarProvincias;