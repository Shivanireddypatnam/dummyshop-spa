import axios from 'axios';
export const api = axios.create({ baseURL: 'https://dummyjson.com', timeout: 12000 });
export async function getProducts({ limit=24, skip=0, signal }={}) { return (await api.get('/products',{params:{limit,skip},signal})).data; }
export async function getProduct(id,{signal}={}) { return (await api.get(`/products/${id}`,{signal})).data; }
export async function searchProducts(q,{limit=100,skip=0,signal}={}) { return (await api.get('/products/search',{params:{q,limit,skip},signal})).data; }
export async function getCategories({signal}={}) { return (await api.get('/products/categories',{signal})).data; }
export async function getCategoryProducts(category,{limit=100,skip=0,signal}={}) { return (await api.get(`/products/category/${encodeURIComponent(category)}`,{params:{limit,skip},signal})).data; }
