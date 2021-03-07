import { TOGGLE_TODO, INSERT_TODO } from "./ActionTypes";

const initialState = {
    data: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_TODO:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        complete: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            const { id } = action.payload;
            return {
                ...state,
                data: state.data.map((data) => {
                    if (data.id === id) {
                        return {
                            id: data.id,
                            content: data.content,
                            complete: !data.complete,
                        };
                    } else {
                        return data;
                    }
                }),
            };
        default:
            return state;
    }
};

export default todoReducer;