
import './App.css';
// import Count from './Count';
// import {useSelector} from 'react-redux'
import UseEffect from './Component/UseEffect';
import UseRef from './Component/UseRef';


function App() {
  // const {count}=useSelector((state)=>state.myreducer)
  return (
   <>
   {/* <h1>{count}</h1>
   <Count/> */}
   <div>
    <UseEffect/>
   </div>
   <div>
    <UseRef/>
   </div>
   </>
  );
}

export default App;
