import {ADD_ONE, REMOVE_ONE} from "../actions/counter";

const initialStage = {
    number : 0
};

export default (counter = initialStage, action) =>{
    const {type, data} = action;

    switch (type){
        case ADD_ONE:
            return Object.assign({}, counter, {number : counter.number + 1});
        case REMOVE_ONE:
            return Object.assign({}, counter, {number: counter.number - 1});
        default:
            return counter;
    }
    return counter;
}
