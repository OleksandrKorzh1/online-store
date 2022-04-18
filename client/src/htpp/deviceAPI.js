import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('type/create',type);
    return data;
}
export const fetchTypes = async () => {
    const{data}=await $host.get('type/')
    return data;
}
export const createBrand = async (brand) => {
    const {data} = await $authHost.post('brand/create',brand);
    return data;
}
export const fetchBrands = async () => {
    const{data}=await $host.get('brand/')
    return data;
}
export const createDevice = async (device) => {
    const {data} = await $authHost.post('device/create',device);
    return data;
}
export const fetchDevices = async (typeId,brandId,page,limit=5) => {
    const{data}=await $host.get('device/',{params:{
        typeId,brandId,page,limit}
    })
    return data;
}
export const fetchOneDevice = async (id) => {
    const{data}=await $host.get('device/'+id)
    return data;
}
//TODO спарашить апдейты и делиты
export const addToBasket = async (deviceId) => {
    const {response} = await $authHost.post('/basket', deviceId)
    return response
}

export const getBasket = async () => {
    const {data} = await $authHost.get('/basket')
    return data
}