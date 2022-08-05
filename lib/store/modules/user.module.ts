const SET_USER = 'user/SET_USER' as const
const SET_SIGNUPSTATE = 'user/SET_SIGNUPSTATE' as const

export type MainAction =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setSignupState>

export interface UserMainState {
    user: {
        email: string,
        memberName: string,
        password: string,
    },
    signupState: boolean
}

export const setUser = (user: UserMainState['user']) => ({ type: SET_USER, payload: user })
export const setSignupState = (signupState: UserMainState['signupState']) => ({ type: SET_SIGNUPSTATE, payload: signupState })


const initialState: UserMainState = {
    user: {
        email: '',
        memberName: '',
        password: '',
    },
    signupState: false
}

const reducer = (state: UserMainState = initialState, action: MainAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.payload
            }
        case SET_SIGNUPSTATE:
            return {
                ...state, signupState: action.payload
            }


        default: return state
    }
}

export default reducer;