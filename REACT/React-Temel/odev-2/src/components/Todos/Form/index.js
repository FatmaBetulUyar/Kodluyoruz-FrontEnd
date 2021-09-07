import {useState,useEffect} from 'react'
import {HiArrowCircleDown} from "react-icons/hi";
import { IconContext } from "react-icons";


const initalValue={item:""}
function Form({addTodos,todos}) {
    const[form,setForm]=useState(initalValue);

    useEffect(()=>{
            setForm(initalValue);
    },[todos]);

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})

    };

    const onSubmit=(e)=>{
      e.preventDefault();

      if(form.item===''){
          return false;
      }

      addTodos([...todos,form])

    };

    // const markAll=todos.map((todo)=>{
    //     todo.isDone=true;  
    //   }
    //   )
//onClick={()=>markAll()}
    return (
        <div>
            <form onSubmit={onSubmit}>
           <div>
            <div className="header">
            {/* <IconContext.Provider value={{ color: "gray", size:"2em", padding:"10em", className: "global-class-name" }}>
                <button onClick={()=>markAll} className="btn-toggle-all"><HiArrowCircleDown/></button>
                </IconContext.Provider> */}
            <input name="item" placeholder="What needs to be done?" value={form.item} onChange={onChangeInput}></input>
            <div className="btnAdd">
                <button  >Add</button>
            </div>
            </div>
            
            
        </div> 
        </form>
        </div>
        
        
    )
}

export default Form;
