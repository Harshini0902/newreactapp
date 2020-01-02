import {createStore} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
var defaultStoreData={
    courses:[],
    posts:[]
}

//createStore(reducer,defStoreData)
export var store =createStore(rootReducer,defaultStoreData);