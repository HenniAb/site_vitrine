export const ADD_ONE = "ADD_ONE";
export const REMOVE_ONE = "REMOVE_ONE";


export const addone = () => {
    return dispatch => {
        dispatch({
            type: ADD_ONE,
            data: 1
        });
    }
};

export const removeone = () => {
    return dispatch => {
        dispatch({
            type: REMOVE_ONE,
            data: 1
        })
    }
};

