import {ToastButton} from './components/Button'
import {ToastContainer} from './components/ToastContainer'
import { toast } from './observer/observer'
import './iterators/Iterator'
import './generator/Generator'



function App() {


  return (
    <div className='h-screen bg-slate-950 relative'> 
    <h1 className='text-white font-bold text-5xl pt-10 flex justify-center'>Toaster</h1>
    <div className='flex justify-center items-center h-40 pl-10 '>

    <ToastButton
    text={"Default "}
    color={"from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"}
    onClick={()=>{
      toast("This is a Default message!")
    }}
    />
    <ToastButton
    text={"Success ✔"}
    color={"from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"}
    onClick={()=>{
      toast.success("✔ This is a Successfull message!")
    }}
    />
    <ToastButton
    text={"Error ❌"}
    color={"from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"}
    onClick={()=>{
      toast.error("❌ This is an Error message!")
    }}
    />
    <ToastButton
    text={"Dismiss All 🚮"}
    color={"from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"}
    onClick={()=>{
        toast.dismissAll()
    }}
    />

    </div>
    <ToastContainer />
    </div>
  )
}

export default App
