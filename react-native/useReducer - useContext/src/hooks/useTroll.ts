import { useContext } from "react";
import { TrollContext } from "../context/TrollContext";

export const useTroll = () => {
    const context = useContext(TrollContext)
    if(!context){
        throw new Error('useBudget must be used within a BugetProvider')
    }
    return context
}