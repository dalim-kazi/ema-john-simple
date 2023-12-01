const addToDataLoaclStorage = (id) => {
    let shoppingCart = {};
    const storageCart = localStorage.getItem('shoppingCart')
    if (storageCart) {
        shoppingCart =JSON.parse(storageCart)
    }
     const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id]=newQuantity
        // localStorage.setItem(id,newQuntity)
    }
    else {
        shoppingCart[id]=1
        // localStorage.setItem(id,1)
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}
const getAddData = () => {
    let shoppingCart = {};
    const storageCart = localStorage.getItem('shoppingCart')
    if (storageCart) {
        shoppingCart =JSON.parse(storageCart)
    }
    return shoppingCart
}
const removeTobd = (id) => {
    const storageCart=  localStorage.getItem('shoppingCart');
      if (storageCart) {
          const shoppingCart = JSON.parse(storageCart);
          if (id in shoppingCart) {
              delete shoppingCart[id];
              localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
          }
  }
}
const LocalStorageClearBD = () => {
      localStorage.removeItem('shoppingCart')
  }
export {
    addToDataLoaclStorage,
    getAddData,
    removeTobd,
    LocalStorageClearBD
}