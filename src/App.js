import  react,  {useState} from 'react';

//import {useForm} from 'react-hook-form';

const App = () =>{

    const [email , setEmail] = useState("");
    const [file, setFile] = useState ("");


   async function Upload (){

    console.log("uplaod");
      return(
      
        
         <div>
            <h1>Uplaod your File</h1>
            <input
            id="file_id" 
            type="file" 
            placeholder="Select Your File"
            name= "files"
            //value= {value.file}
            /> 
            <button onClick={(e)=>setFile(e.target.files[0])} >submit</button>

        </div>  
    );      
    };

    return(
        <>
         <div>
            <h1> Enter your Email</h1>
            <input required
            id="email_id" 
            type="text" 
            placeholder="Enter your Email Id"
            name= "email"
            //value= {value.email}
            onChange={(e)=>setEmail(e.target.value)}
            /> 
            <button onClick={Upload} >submit</button>

        </div>
        </>
    );

};


export default App;