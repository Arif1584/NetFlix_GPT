import { Provider } from 'react-redux';
import Body from './components/Body';
import appSotre from './utils/aapStore';

function App() {
  return (
    <Provider store = {appSotre}>
      <Body/>
    </Provider>
  )
}

export default App;
