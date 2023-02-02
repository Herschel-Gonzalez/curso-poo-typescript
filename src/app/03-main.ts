import { ProductHttpService } from "./services/product-http.service";
(async()=>{
    const productService = new ProductHttpService();
    console.log('---'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item=>item.price));

    const productId = products[0].id;
    console.log('Update');

    await productService.update(productId,{
        price: 20000,
        title: 'New title',
        description: 'New description'
    });

    console.log('find ONE');

    const product = await productService.findOne(productId);
    console.log(product);
    
    
    
    
})();