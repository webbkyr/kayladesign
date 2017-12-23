import { SERVICES, CONTACT, ABOUT, PORTFOLIO  } from './actions'

const initialState = {
  view: 'Home'

}
export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ABOUT':
    return Object.assign({}, state, {view: 'About'})

    case 'SERVICES':
    return Object.assign({}, state, {view: 'Services'})

    case 'PORTFOLIO':
    return Object.assign({}, state, {view: 'Portfolio'})

    case 'CONTACT':
    return Object.assign({}, state, {view: 'Contact'})
  
    default: 
      return state;
  }
}