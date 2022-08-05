const INSERT = 'todo/INSERT' as const
const REMOVE = 'todo/REMOVE' as const
const CHANGE_INPUT = 'todo/CHANGE_INPUT' as const
const TOGGLE = 'todo/TOGGLE' as const
const UPDATE = 'todo/UPDATE' as const

export type MainAction =
    | ReturnType<typeof insert>
    | ReturnType<typeof remove>
    | ReturnType<typeof change_input>
    | ReturnType<typeof toggle>
    | ReturnType<typeof update>

export interface TodoMainState {
    text: string,
    no: number,
    todos: [
        { id: number, text: string, done: boolean },
    ]
}

export const insert = (text: string) => ({ type: INSERT, text })
export const remove = (id: number) => ({ type: REMOVE, id })
export const change_input = (text: string) => ({ type: CHANGE_INPUT, text })
export const toggle = (id: number) => ({ type: TOGGLE, id })
export const update = (id: number, text: string) => ({ type: UPDATE, id, text })

const initialState: TodoMainState = {
    text: '',
    no: 0,
    todos: [
        { id: 0, text: '', done: false }
    ],
}

const reducer = (state: TodoMainState = initialState, action: MainAction) => {
    switch (action.type) {
        case INSERT: return {
            ...state,
            no: state.no + 1,
            todos: [
                ...state.todos,
                { id: state.no + 1, text: action.text, done: false }
            ]
        }
        case REMOVE: return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
        case CHANGE_INPUT: return {
            ...state,
            text: action.text
        }
        case TOGGLE:
            console.log('togggle', state.todos.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            ))
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                )
            }
        case UPDATE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, text: action.text } : todo
                )
            }
        default: return state
    }
}

export default reducer;