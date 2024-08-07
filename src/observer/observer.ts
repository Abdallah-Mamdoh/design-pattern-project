import { ToastProps } from "../components/Toast";
import { v4 as uuid } from 'uuid';

type Observer <observeData> = (data: observeData) => void; 

class Observable <observeData> {

    observers : Observer<observeData>[] = [];

    subscribe (observer : Observer<observeData>){
        this.observers.push(observer);

        return(()=>{this.observers = this.observers.filter(obs => obs != observer)})
    }

    unsubscribe (observer : Observer<observeData>){
        this.observers = this.observers.filter(obs => obs != observer);
    }

    notify (data : observeData){
        this.observers.forEach(obs => obs(data));
    }
};

type Toast = Pick<ToastProps, 'id'|'message'|'variant'>;

export const toastObservable = new Observable <Toast>;

export function toast (message : string){
    toastObservable.notify({
        id : uuid(),
        message : message,
        variant : "default"
    })
}

toast.success = function (message : string){
    toastObservable.notify({
        id : uuid(),
        message : message,
        variant : "success"
    })
}

toast.error = function (message : string){
    toastObservable.notify({
        id : uuid(),
        message : message,
        variant : "error"
    })
}

toast.dismissAll = function(){}


