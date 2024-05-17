type initStateType = {
    themeId: number
}
const initState: initStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): { type: string, id: number } => ({ type: 'SET_THEME_ID', id })// fix any

type ActionType = ReturnType<typeof changeThemeId>