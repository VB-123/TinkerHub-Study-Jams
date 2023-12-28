// create an inventory object
interface inventory_obj { 
    readonly _id : number,
    name : string,
    Products : discount_product[],
    get_all_products : () => discount_product[],
    get_products_by_id : (obj_id : number) => product | string
}

interface product {
    readonly _id: number,
    name : string,
    price : number
}

function calculateDiscount(prod : discount_product){
    prod.discount_price = 0.88* prod.price
    console.log("Product Name:",prod.name,"Discount:",prod.discount_price)
}

interface discount_product extends product {
    discount_price ?: number
}
const obj1 : inventory_obj = {
    _id : 101,
    name : "notebook",
    Products : [
        {_id: 201,name :"classmate",price: 60},
        {_id: 202,name :"camlin",price: 50},
        {_id: 203,name :"brand x",price: 40} 
    ],
    get_all_products : () =>  {return obj1.Products},
    get_products_by_id(id: number): product | string {
        for (const product of obj1.Products) {
            if (product._id === id) {
                return product;
            }
        }
        return "Product not found";
    }
}


console.log(obj1.get_all_products())
console.log("Product with id 201 is: ",obj1.get_products_by_id(201))
calculateDiscount(obj1.Products[0])