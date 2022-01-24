import JsonPlaceholder from "../apis/JsonPlaceholder"

export const fetchPost = () => async dispatch => {
    const response = await JsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response })
}