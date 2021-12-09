import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'

import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
import Layout from "./_layout";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </Provider>
  )
}

export default MyApp
