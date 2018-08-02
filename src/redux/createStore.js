import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './modules';

const store = createStore(
  reducers,
  {},
  /* preloadedState, */
  devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ),
);

export default function configureStore() {
  return store;
}
