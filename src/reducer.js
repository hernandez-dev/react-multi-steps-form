const reducer = (draft, action) => {
  // console.log(action)
  switch(action.type) {
    case "set-current-step":
      draft.currentStep = action.value
      break
    /*case "set-summary":
      draft.steps[draft.steps.length - 1].summary = action.value
      break*/
    case "set-form-control":
      // draft.steps[action.step].fields[action.index].invalid = false
      draft.steps[action.step].fields[action.index].value = action.value
      break
    case "select-plan":
      draft.steps[action.step].modalities = draft.steps[action.step].modalities.map(prev => ({ ...prev, selected: prev.id == action.id }))
      break
    case "select-monthly-plan":
      draft.steps[action.step].monthly = action.value
      break
    case "select-addon":
      draft.steps[action.step].addons[action.index].selected = action.value
      break
    case "validate-personal-information":
      draft.steps[0].fields = action.fields
      draft.currentStep = action.step
      break
  } // switch end
}

export default reducer
