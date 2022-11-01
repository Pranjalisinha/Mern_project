export const AddCart = (product) =>{
    return{
        type : 'ADDITEM',
        payload : product
    }
}

export const DeleteCart = (product) =>{
    return{
        type : 'DELITEM',
        payload : product
    }
}