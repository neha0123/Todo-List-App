import React,{useState} from 'react'
import Todolist from './Todolist'

const App=()=>{
    const [input, setInputList] = useState("mango");
    const [Items,setItems]=useState([]);
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    }

    const listOfItem=()=>{
        setItems((olditems) => {
            return [...olditems,input];
        });
        setInputList('');
    }
    const deleteItem=(id)=>{
      
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
return index!==id;

            })
        })

 
      }
return( <>
<div className="main_div">
<div className="center_div">
<br/>
<h1>To Do List</h1>
<br/>

<input type="text" placeholder='Add a Items' onChange={itemEvent} value={input}/>
<button onClick={listOfItem}> + </button>
<ol>
    {/* <li>{input}</li> */}
  {  Items.map((itemval,index)=>{
     return   <Todolist 
      key={index} 
      text={itemval}
       id={index}
           onSelect={deleteItem}
       />
    })}
</ol>
</div>

</div>


</>)
}
export default App;