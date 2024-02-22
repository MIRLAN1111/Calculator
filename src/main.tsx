import React from 'react' // Import the React library
import ReactDOM from 'react-dom/client' // Import the ReactDOM library
import App from './App.tsx' // Import the App component
import './index.css' // Import the CSS file
import { Provider } from 'react-redux' // Import the Provider component from react-redux
import { createStore } from 'redux' // Import the createStore function from redux
import rootReducer from './reducers' // Import the rootReducer from reducers

const store = createStore(rootReducer) // Create a Redux store using the rootReducer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
) // Render the App component inside the Provider component, passing the store as a prop