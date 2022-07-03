import {useState} from 'react'
import './App.css';
import KorillaHeader from './Component/Header';
import Receipt from './Component/Receipt';
import { receipt1,receipt2,receipt3,rec }from './Component/Records';
import {v4 as uuidv4} from 'uuid'

// console.log(Records)


function App() {
  const [receipts, setReceipts] = useState([receipt1,receipt2,receipt3, ...rec])
  const mappedReceipts = receipts.map((receipt,index)=>{
    const uuid = uuidv4()
   return <Receipt receipt = {receipt} key={uuid}></Receipt>
  })
  return (
    <div className="App">
     <KorillaHeader></KorillaHeader>
     <div className='container'>
     {mappedReceipts}
    </div>

    </div>
  );
}

export default App;
