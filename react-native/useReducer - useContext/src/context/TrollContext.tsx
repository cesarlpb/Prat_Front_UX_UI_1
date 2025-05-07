import { createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { initialState, trollReducer, type TrollActions, type TrollState } from "../reducer/troll-reducer"

type TrollContextProps = {
    state: TrollState,
    dispatch: Dispatch<TrollActions>
}

type TrollProviderProps = {
    children: ReactNode
}

export const TrollContext = createContext<TrollContextProps>(null!)

export const TrollProvider = ({children}: TrollProviderProps) => {
    const [state, dispatch] = useReducer(trollReducer, initialState)

    return(
        <TrollContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </TrollContext.Provider>
    )
}