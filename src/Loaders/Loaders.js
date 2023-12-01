import { getAddData } from "../components/Utility/Fakebd"

export const CartAndProductLoader =async () => {
    const productsLoader = await fetch(`http://localhost:5000/products`)
    const {products} = await productsLoader.json()
     
    const storageCart = getAddData()
    let savaCart =[]
    for (const id in storageCart) {
        const addedProduct = products.find(product => product._id === id)
        if (addedProduct) {
            const quantity = storageCart[id]
            addedProduct.quantity = quantity
            savaCart.push(addedProduct)
         }
    }
    return {products,savaCart}
}