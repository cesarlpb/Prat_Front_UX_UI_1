import type { User } from "../types";

export type TrollActions =
    { type: 'addTroll', payload: { user: User } } |
    { type: 'clearTroll' } |
    { type: 'playPause', payload:{isPlaying:boolean}}

export type TrollState = {
    user: User,
    isPlaying: boolean
}

export const initialState: TrollState = {
    user: { image: '', url: '' },
    isPlaying: false
}

export const trollReducer = (
    state: TrollState = initialState,
    action: TrollActions
) => {
    if (action.type === 'addTroll') {
        return {
            ...state,
            user: action.payload.user
        }
    }

    if (action.type === 'clearTroll') {
        return {
            ...state,
            user: {image:'', url:''}
        }
    }

    if(action.type === 'playPause') {
        return{
            ...state,
            isPlaying: action.payload.isPlaying
        }
    }

    return state
}