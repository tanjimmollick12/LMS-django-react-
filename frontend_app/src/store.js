import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  adminLoginReducer,
  adminRegisterReducer,
  adminDetailsReducer,

} from './reducers/adminReducer'

  const reducer = combineReducers({

     adminLogin: adminLoginReducer,
     adminRegister: adminRegisterReducer,
     adminDetails: adminDetailsReducer,

  })





  const adminInfoFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null


  const initialState = {
    adminLogin:{adminInfo: adminInfoFromStorage},
  }


  const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store