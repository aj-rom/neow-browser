import '../styles/globals.css'

import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/searchReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(searchReducer, composeEnhancers(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
