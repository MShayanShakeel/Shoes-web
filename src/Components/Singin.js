import React,{useEffect,useState,useRef} from 'react';
import Header from './Header';
const Singin = () => {
  const [emailName,setEmailName] = useState("")
  const [passwordCheck,setPasswordCheck] = useState("")
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [checkName,setCheckName] = useState("")
    const [showHeader,setShowHeader]=useState(false)
    const [showMenu, setShowMenu]= useState(false)
    const localsingin=localStorage.getItem("singin")
    useEffect( ()=> {
        if(localsingin){
          console.log(showHeader)
          console.log(showMenu)
            setShowHeader(true)
       }
    })
    const onChange = (e)=>{
      setCheckName(e.target.value)
    }
    const handleClick = ()=>{

    //     if(name.current.value && email.current.value && password.current.value)
    //     {
    //         localStorage.setItem("name",checkName)
    //         localStorage.setItem("email",emailName)
    //         localStorage.setItem("Password",passwordCheck)
    //         // localStorage.setItem("Singin",Singin.current.value)
    //         console.log("fine");
    //         alert("Account Create succesfully!!")
    //     }
    //     setShowHeader(true)

    // }

    if(checkName && emailName && passwordCheck){
      {
        localStorage.setItem("name",checkName)
        localStorage.setItem("email",emailName)
        localStorage.setItem("Password",passwordCheck)
        // localStorage.setItem("Singin",Singin.current.value)
        console.log("fine");
        alert("Account Create succesfully!!")
    }
    setShowHeader(true)
    }else{
      alert("please enter credentials")
    }

  }

    
  return (
    <div className='sing_in_main'>
        {showHeader ? <Header />:
        
      <div className='container'>
        <div className='foam'>
                <div className='input_text'>
                    <input placeholder='Name'type= 'text' ref = {name} onChange={onChange}/>
                </div> 

                 <div className='input_text'>
                    <input placeholder='email'type= 'email' ref = {email} onChange={(e)=>{setEmailName(e.target.value)}}/>
                </div>   

                <div className='input_text'>
                    <input placeholder='Password'type= 'password' ref = {password} onChange={(e)=>{setPasswordCheck(e.target.value)}}/>
                </div> 
                <button onClick={handleClick} > sing up</button>
        </div>
      </div>
}
    </div>
  );
}

export default Singin
