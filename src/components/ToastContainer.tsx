import { toast, toastObservable } from '../observer/observer';
import { Toast, ToastProps } from './Toast';
import { useEffect, useState } from 'react';

type Toast = Pick<ToastProps, 'id'|'message'|'variant'>;

export function ToastContainer (){
    const [toasts , setToasts] = useState<Toast[]>([])

    useEffect(()=>{
        return toastObservable.subscribe(toast => setToasts(prevToasts => [...prevToasts,toast]))
    },[])

    toast.dismissAll = function(){
        setToasts([])
    }
    
    return(
        
        <div className='absolute bottom-0 right-5'>
            {toasts.map((toast)=>    
            <Toast 
                key={toast.id} 
                id={toast.id} 
                message={toast.message} 
                variant={toast.variant} 
                onClose={()=>{
                    setToasts(prevToasts=>prevToasts.filter((e)=>e.id != toast.id))
                }}/>
            )}
        </div>
    )
}