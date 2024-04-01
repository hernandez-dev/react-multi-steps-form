import { useState, useEffect, useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"
import DispatchContext from "../../context/DispatchContext.js"

// components
import FormHeader from "./components/FormHeader.jsx"
import Button from "./components/Button.jsx"

export default function StepsForm() {
  // local state
  const [submit, setSubmit] = useState(false)

  // app state
  const { steps, currentStep } = useContext(StateContext)

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

  // step id changes
  useEffect(() => {
    const delay = summary ? 500 : 50
    const timeout = setTimeout(() => setSubmit(summary), delay)
    return () => clearTimeout(timeout)
  }, [step.id])

  return(
    <div className="desktop:flex-1">
      <form className="flex flex-col min-h-[485px] flex-1 desktop:max-w-2xl desktop:h-full desktop:mx-auto desktop:min-h-full">
        <section className="relative space-y-10 p-5 m-4 -mt-[105px] bg-white rounded-lg shadow-lg desktop:mx-0 desktop:-mt-0 desktop:shadow-none">
          <FormHeader step={step} />
          <step.Component step={step} dispatch={appDispatch} monthly={steps[1].monthly} />
        </section>
        <footer className="flex justify-between mt-auto bg-white p-4 rounded-lg desktop:bg-transparent desktop:p-0 desktop:mt-none">
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
            type={submit ? "submit" : "button"}
            action="next"
            bg={summary ? "bg-purplish-blue" : "bg-marine-blue"}
            color="text-white"
            disabled={summary && !submit}
            hover="hover:bg-purplish-blue"
            focus="hover:bg-purplish-blue"
            onClick={summary ? () => null : handleClick}
          >
            {summary ? "comfirm" : "next step"}
          </Button>
        </footer>
      </form>
    </div>
  )
}
