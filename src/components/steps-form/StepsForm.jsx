import { useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"
import DispatchContext from "../../context/DispatchContext.js"

// components
import FormHeader from "./components/FormHeader.jsx"
import Button from "./components/Button.jsx"

export default function StepsForm() {
  // app state
  const { steps, currentStep } = useContext(StateContext)

  // current step
  const step = steps[currentStep]

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

  return(
    <div className="flex-1">
      <form className="flex flex-col flex-1 max-w-2xl h-full mx-auto pb-5 pt-10">
        <section className="flex-1 space-y-10">
          <FormHeader step={step} />
          <step.Component step={step} dispatch={appDispatch} />
        </section>
        <footer className="flex justify-between">
          <Button
            type="button"
            action="prev"
            bg="bg-transparent"
            color="text-cool-gray"
            disabled={currentStep === 0}
            onClick={handleClick}
          >
            go back
          </Button>
          <Button
            type="button"
            action="next"
            bg="bg-marine-blue"
            color="text-white"
            disabled={currentStep === (steps.length - 1)}
            onClick={handleClick}
          >
            next step
          </Button>
        </footer>
      </form>
    </div>
  )
}
