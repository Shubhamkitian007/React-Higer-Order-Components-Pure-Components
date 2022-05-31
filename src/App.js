import './App.css';
import Counter from './HOCPC/Counter';
import {HOCRed, HOCGreen, HOCBlue} from './HOCPC/HOCCounter';
import PureComp from './HOCPC/PureComp';

function App() {
  return (
    <>
    <div className="App">
      <h1>HOC</h1>
      <div className='app'>
      <HOCRed cmp = {Counter} />
      <HOCGreen cmp = {Counter} />
      <HOCBlue cmp = {Counter} />
      </div>
    </div>
      <PureComp />
    </>
  );
}

export default App;
