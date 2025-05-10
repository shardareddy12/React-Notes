import {useState,useEffect,useRef,useMemo} from "react";
export default function Login(){

    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')

    //useRef Blinking cursor on inputs.
    const inputRef = useRef(null)

    //bydefault go on inputs and focus & blink the cursor
    useEffect(()=>{inputRef.current.focus()},[]) 

    //Focus input on button click
    const handleclick = ()=>{inputRef.current.focus()}

    //useMemo -
    const isValid = useMemo(()=>{ return (email.includes('@') && pw.length>5)},[email,pw])

    return (
    <>
    <form>
        <input 
            type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            ref ={inputRef}   
            placeholder='abc@gmail.com'/>
        <input 
            type="password" 
            value={pw} 
            onChange={(e)=>setPw(e.target.value)}
            placeholder='password'/>
        <p>{isValid ? 'valid inputs':'invalid inputs'}</p>
    </form>
    <button onClick={handleclick}>Submit</button>
    </>
    )
    
}