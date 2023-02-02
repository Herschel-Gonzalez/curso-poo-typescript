import { ProductMemoryService } from "./services/product-memory.service"; 

const productService = new ProductMemoryService();

productService.create({
    title: 'producto 1',
    price: 100,
    description: 'aaaaa',
    categoryId:12,
    images:[]

});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId,{
    title:'cambio de nombre'
});

const rta = productService.findOne(productId);
console.log(rta);
