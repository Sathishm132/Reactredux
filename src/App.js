import Counter from './components/Counter';
import {Provider} from "react-redux"
import stored from './store';


function App() {
  return (
    <Provider store={stored}> <Counter />
  </Provider>
     );
}

export default App;
