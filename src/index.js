import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import {firebase, auth, firestore} from './Firebase/config';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase, auth, firestore}}>

<App />

</FirebaseContext.Provider>
, document.getElementById('root'));

