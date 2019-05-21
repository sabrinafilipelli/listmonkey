export default function reducer(state, action) {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: [...action.payload]
      }
    default:
      return state
  }
}
