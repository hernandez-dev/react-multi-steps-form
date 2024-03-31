const reducer = (draft, action) => {
  // console.log(action)
  switch(action.type) {
    case "set-current-step":
      draft.currentStep = action.value
      const plan = draft.steps[1].modalities.find(prev => prev.selected)
      plan.monthly = draft.steps[1].monthly
      const multiplier = plan.monthly ? 1 : 10
      const summary = {
        plan: { ...plan, price: plan.price * multiplier },
        addons: draft.steps[2].addons.filter(prev => prev.selected).map(addon => ({ ...addon, price: addon.price * multiplier })),
        label: plan.monthly ? "mo" : "yr"
      }
      draft.steps[3].summary = summary
      break
    case "set-form-control":
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
  } // switch end
}

export default reducer
