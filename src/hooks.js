import { useEffect, useState, useCallback } from "react";
import { STATUSES } from "./constants";
import { addItem, deleteItem, getItems } from "./utils/indexdb";


export const useBooleanToggle = () =>{
    const [status,setStatus] = useState(false)
    
    const toggleStatus = () =>{
        setStatus((status)=>!status)
    }

    return {
        status,
        toggleStatus
    }
} 

export const useData = () =>{
    const [state,setState] = useState({
        transactions:[],
        error:'',
        status:STATUSES.IDLE
    })

    useEffect(() => {
        setState({...state,status:STATUSES.PENDING})
        getItems()
          .then((transactions) => {
            setState({...state, transactions,status:STATUSES.SUCCESS});
          })
          .catch((error) => {
            setState({...state,error,status:STATUSES.ERROR})
        });
      }, []);

      const addTransaction = useCallback((data) =>{
        const transaction = {
            comment:data.comment,
            value:data.money,
            date: new Date().toDateString(),
            id: Date.now(),
            isStarred:false
          };
          setState((state) => ({
            ...state,
            transactions: [...state.transactions, transaction],
          }));
          addItem(transaction);
      },[setState])
      
  const deleteTransaction = useCallback((id) => {
    deleteItem(id);
    setState((state)=>({...state,transactions: state.transactions.filter((item) => item.id !== id)}));
  },[setState])

  const addFavorite = useCallback((id) =>{
    setState((state)=>({...state,transactions:state.transactions.map(el=> el.id !== id ? el : ({...el,isStarred:!el.isStarred}))}))
  },[setState])


    return {
        ...state,
        addTransaction,
        deleteTransaction,
        addFavorite
    }
}