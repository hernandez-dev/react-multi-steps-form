import { useState, useEffect, useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"
import DispatchContext from "../../context/DispatchContext.js"

// utils
import { validate } from "./utils.js"

// components
import FormHeader from "./components/FormHeader.jsx"
import Button from "./components/Button.jsx"
import Confirmation from "./components/Confirmation.jsx"

export default function StepsForm() {
  // local state
  const [submit, setSubmit] = useState(false)

  // app state
  const { steps, currentStep, success } = useContext(StateContext)

  // current step
  const step = steps[currentStep]

  // summary
  const summary = currentStep === steps.length - 1

  // app dispatch
  const appDispatch = useContext(DispatchContext)

  // handleClick
  function handleClick(e) {
    const action = e.target.getAttribute("data-action").toLowerCase()
    if (action === "next") {
      appDispatch({ type: "set-current-step", value: currentStep + 1 })
    } else {
      appDispatch({ type: "set-current-step", value: currentStep - 1 })
    }
  }

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault()
    if (currentStep === (steps.length - 1)) {
      appDispatch({ type: "submit" })
    } else {
      const fields = validate(steps[0].fields)
      appDispatch({
        type: "validate-personal-information",
        fields: fields,
        step: fields.filter(field => field.invalid).length ? 0 : currentStep + 1
      }) // appDispatch end
    }
  }

  // currentStep changes
  useEffect(() => {
    const plan = steps[1]
    const selectedPlan = plan.modalities.find(plan => plan.selected)
    const multiplier = plan.monthly ? 1 : 10
    const addons = steps[2].addons.filter(addon => addon.selected).map(addon => ({ ...addon, price: addon.price * multiplier }))
    const summary = {
      plan: { ...selectedPlan, price: (selectedPlan.price * multiplier) },
      addons: addons,
      label: plan.monthly ? "mo" : "yr"
    }
    appDispatch({ type: "set-summary", value: summary })
  }, [currentStep])

  return(
    <div className="desktop:flex-1">
      <form onSubmit={handleSubmit} className="flex flex-col min-h-[485px] flex-1 desktop:max-w-2xl desktop:h-full desktop:mx-auto desktop:min-h-full">
        <section className="relative p-5 m-4 -mt-[105px] bg-white rounded-lg shadow-lg overflow-hidden desktop:flex-1 desktop:mx-0 desktop:-mt-0 desktop:shadow-none">
          <FormHeader step={step} />
          <step.Component step={step} dispatch={appDispatch} monthly={steps[1].monthly} />
          {success ? <Confirmation /> : ''}
        </section>
        <footer className={`${success ? "invisible desktop:hidden" : "flex justify-between"} mt-auto bg-white p-4 rounded-lg desktop:bg-transparent desktop:p-0 desktop:mt-none`}>
          <Button
            type="button"
            action="prev"
            bg="bg-transparent"
            color="text-cool-gray"
            disabled={currentStep === 0}
            hover=""
            focus=""
            onClick={handleClick}
          >
            {currentStep === 0 ? "" : "go back"}
          </Button>
          <Button
            type="submit"
            action="next"
            bg={summary ? "bg-purplish-blue" : "bg-marine-blue"}
            color="text-white"
            disabled={false}
            hover="hover:bg-purplish-blue"
            focus="hover:bg-purplish-blue"
            onClick={() => null}
          >
            {summary ? "comfirm" : "next step"}
          </Button>
        </footer>
      </form>
    </div>
  )
}
