// usReducer es un hook de React que permite gestionar el estado de manera más predecible.

// Preguntas añadidas:
// 1. Sobre el operador de aserción no nula (!) en createContext
// 2. Sobre optimización de rendimiento
// 3. Comparación entre useReducer y useState
// 4. Estrategias de testing
// 5. Explicaciones adicionales:
//    - Uso de useReducer
//    - Estructura del contexto
//    - Tipos TypeScript
//
import { createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { initialState, trollReducer, type TrollActions, type TrollState } from "../reducer/troll-reducer"

/**
 * Type definitions for the context value that will be provided to consumers.
 * Contains the current state and a dispatch function to update it.
 */
type TrollContextProps = {
    state: TrollState,
    dispatch: Dispatch<TrollActions>
}

/**
 * Props for the TrollProvider component.
 * @property {ReactNode} children - Child components that will have access to this context.
 */
type TrollProviderProps = {
    children: ReactNode
}

/**
 * Creates a new context for managing troll-related state.
 * The non-null assertion (!) is used here because we ensure the context is never null
 * by providing default values in the TrollProvider.
 */
export const TrollContext = createContext<TrollContextProps>(null!)

/**
 * TrollProvider is a context provider that makes the troll state and dispatch
 * function available to all child components.
 * 
 * @example
 * ```tsx
 * <TrollProvider>
 *   <App />
 * </TrollProvider>
 * ```
 */
export const TrollProvider = ({children}: TrollProviderProps) => {
    // useReducer hook manages state transitions based on dispatched actions
    // - trollReducer: A pure function that determines state changes
    // - initialState: The starting state before any actions are dispatched
    const [state, dispatch] = useReducer(trollReducer, initialState)

    // The provider makes the state and dispatch function available to all children
    return (
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

/*
PREGUNTAS SOBRE ESTE CÓDIGO:

1. ¿Por qué se utiliza el operador de aserción no nula (!) al crear el contexto con createContext<TrollContextProps>(null!)?
   ¿Qué problemas podría causar su uso y cómo podríamos evitarlo?

2. ¿Cómo manejarías la optimización de rendimiento cuando el estado del contexto cambia frecuentemente?
   ¿Qué estrategias podríamos implementar para prevenir renderizados innecesarios?

3. ¿Qué ventajas tiene usar useReducer en lugar de useState en este contexto?
   ¿En qué situaciones sería mejor una u otra opción?

4. ¿Cómo podríamos probar este componente TrollProvider y su hook useReducer asociado?
   ¿Qué casos de prueba serían importantes para asegurar su correcto funcionamiento?
*/