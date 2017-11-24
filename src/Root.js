import { Provider, connect } from 'react-redux';
import configureStore from './store/storeConfig';
const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}