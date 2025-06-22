export const HooksData = {



}

export  const hooks = [
    {
      "title":"What is react hook ?",
      "description":"React hooks are the utility function, that allows us to use state and other react features in functional component."
    },
    {
      "subtitle":"Most Commonly Used hooks"
    },
     {
      "title": "useState",
      "description": "This is used to intitialize the value, if the value is updated it will re-render the component. Use this when you want to change the ui/componet based on the value of a variable. This returns two things first is a value second is setter method for the value. If you want to update in variable then use this setter method to update the value",
      "syntax": "import { useState } from 'react' \n const [var,setVariable] = useState('inital_value)"
    } ,
    {
      "title": "useEffect",
      "description": "This allows to perform sideeffect e.g fetching data from api, Directly updating DOM, Timer like setTimeInterval/setTimeout. \n   useEffect(()=>{}) -> this will be called whenever any state in componet changes.\n useEffect(()=>{},[]) -> this will be called only once when the componet is loaded.\n useEffect(()=>{},[var1]) -> this will be called whenever state in var1 changes.",
      "syntax": "import { useEffect } from 'react' \n useEffect(call_back_function, dependency_list)",
      "code": "function App(){\n  const [count, setCount] = useState(0);\n  useEffect(()=>{\n    setTimeout(()=>{\n      setCount(count=>count+1);\n    },2000)\n  },[]);\n  return(\n  <>\n    <h1>Hello, This app componet is rendert {count} times</h1>\n </>\n  );\n}"
    },
    {
      "title": "useRef",
      "description": "This allows you to create mutable(we can change) variable. This will not re-render/re-paint the component.",
      "syntax": "import { useRef } from 'react' \n const contRef = useRef(0) \n useEffect(()=>{countRef.current += 1;},[countRef.current])",
      "more_example": "import { useRef } from 'react' \n const inputElement = useRef();\n return ( <div> <input type = 'text' ref = {inputElement} /></div> )",
      "code": "function App(){\n  const [value,setValue] = useState(0);\n   // const [count,setCount] = useState(0);\n  const count = useRef(0);\n  useEffect(()=>{\n    // setCount(prev=> prev+1);\n    count.current +=1;// whenever use useRef call object by .current to accces value\n  });\n  return (\n    <div>\n      <button onClick={()=>setValue(prev=>prev-1)}>-1</button>\n      <h1>{value}</h1>\n      <button onClick={()=>setValue(prev=>prev+1)}>+1</button>\n      <h1>How many Times button Clicked : {count.current}</h1>\n    </div>\n  );\n}"
    },
    {
      "title": "useMemo",
      "description": "This returs a memoized value. It is like caching a value so that it does'nt need to be re-calculated. It only runs when one of its dependencies is updated. It returns a memoized value",
      "syntax": "import { useState } from 'react' \n const [var,setVariable] = useState('inital_value)",
      "code":"function App(){\n/* you will observe that random_function called to be displayed every time whenever state of counter variable changes when we dont use useMemo, because when we change the state of counter the component is re-rendered and function call happens every time*/\n  const [value,setValue] = useState(0);\n  const [count,setCount] = useState(0);\n  function randomFunc(num){\n    console.log('random_function called');\n    return Math.pow(num,3)\n  }\n  const result = useMemo(()=>{return randomFunc(value) },[value]);//randomFunc(value);\n  return (\n    <div>\n      <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>\n      <h2>cube of number = {result} </h2>\n      <button onClick={()=>{setCount(count+1)}}>Counter++</button>\n      <h1>Counter : {count}</h1>\n    </div>\n  );\n}"
    },
   {
        "title":"useCallback",
        "description":"This lets yo cache a function defination between render. It does not create multiple instance of same funtion when re-render happens.It provides cached function on re-render of the component.",
        "code":"//Header Component\nexport function Header(props) {\n  console.log('header rendered');\n    return(\n    <div>\n      <h1>Header</h1>\n    </div>);\n}/*export default React.memo(Header); use React.memo in export in order not to re-render the component which in mounted in the component in which action is performed*/\n\n//App component\nexport function App(props) {\n  const [count,setCount]=useState(0);\n  return (\n    <div>\n      <Header/>\n      <h1>{count}</h1>\n      <button onClick={()=>{setCount(count+1)}}>Start editing to see some magic happen!</button>\n    </div>\n    );\n}\n\n//second example \nexport function App(props) {\n  const [count,setCount] = useState(0);\n  const newFn = useCallback(()=>{},[])\n  return(\n    <div>\n      <Header newFn={newFn}/>\n      <h1>{count}</h1>\n      <button onClick={()=>{setCount(count+1)}}>Start editing to see some magic happen!</button>\n    </div>\n  );\n}"
    }    
  ]

  
