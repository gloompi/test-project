// actions
export const SUBMIT_FORM = `SUBMIT_FORM`

const initialState = {
  select: null,
  checkbox: false,
  input1: '',
  input2: null
}
// reducers
export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SUBMIT_FORM :
      return {...payload}

    default:
      return state
  }
}


// actions
export const submitForm = data => dispatch => {
  dispatch({
    type: SUBMIT_FORM,
    payload: data
  })
}