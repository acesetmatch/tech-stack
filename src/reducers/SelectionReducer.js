export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
//Reducers are called with arguments: 1. State object. 2. Action
// Need to provide initial state default argument so we don't return undefined.
