import '../src/styles/globals.css'

import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../src/reducers/rootReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
