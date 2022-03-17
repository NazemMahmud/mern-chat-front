/**
 * dispatch from every action creator when catch error/s
 *
 * @param errorType => this is action.type name
 * @param error => whole error object
 * @returns {{payload, type, error: boolean}}
 */
export const errorActionCreator = (errorType, error) => {
    return {
        type: errorType,
        error: true,
        payload: error,
    }
}

/**
 *  call from every reducer case, so that error message can be handled centrally
 *
 * @param state
 * @param action
 * @returns {(*&{payload, error: null})|(*&{error: (*&{errorMessage})})}
 */
export const errorReducer = (state, action) => {
    if (!action.error) {
        return {
            ...state,
            error: null,
            payload: action.payload
        }
    }

    return {
        ...state,
        error: {
            errorMessage: action.payload.response.data.message,
            ...action.payload.response.data,
        },
    }
}
