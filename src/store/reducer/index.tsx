import { CHANGE__NAME } from '../types/index'
interface Action{
    type: string,
    [propname:string]: any
}
export interface StoreType{
    name:string 
}
export const reducer = ( store:StoreType = { name: 'zhou'}, action:Action ): StoreType => {
    switch (action.type){
        case CHANGE__NAME: return Object.assign({},{...store, name: action.name});  
        default: return store;
    }
}