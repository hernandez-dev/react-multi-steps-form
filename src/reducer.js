const reducer = (draft, action) => {
  // console.log(action)
  switch(action.type) {
    case "set-current-step":
      draft.currentStep = action.value
      break
    /*case "set-form-control":
      draft.steps[action.step].fields[action.index].value = action.value
      break*/
  } // switch end
}

export default reducer
