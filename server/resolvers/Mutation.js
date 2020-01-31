const products = require("../data/products");

function indiceItem (filtro){
    if(!filtro) return -1
    const { id } = filtro
    if(id) {
        return products.findIndex(i => i.id === id)
    } return -1
}

module.exports = {
    deleteItem(_, { filtro }){
        const item = indiceItem(filtro)
        if(!item) return false;
        products.splice(products.indexOf(item), 1);
        return true;
    }
    
}