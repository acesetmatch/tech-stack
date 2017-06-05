import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
// libraries is the key, Libraryreducer is the value
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

//console.log(store.getState());
// { libraries: [] }

