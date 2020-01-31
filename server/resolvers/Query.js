const products = require("../data/products");

function indiceItem (filtro){
    if(!filtro) return -1
    const { id, price, name } = filtro
    if(id) {
        return products.findIndex(i => i.id === id)
    } else if(price) {
        return products.findIndex(i => i.price === price)
    } else if(name) {
        return products.findIndex(i => i.name.toLowerCase() === name.toLowerCase())
    } return -1
}

module.exports = {
    products:(_,{ args }) =>  products,

    product(_,{ filtro }){
        const i = indiceItem(filtro)
        if(!i) return null
        return products[i];
    }
}