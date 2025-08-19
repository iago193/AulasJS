import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { store, persistor } from './store/';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header';
import AppRoutes from './routes/';

import './assets/style/App.css';
import './assets/style/Toast.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <ToastContainer
            className={'toast-container'}
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
