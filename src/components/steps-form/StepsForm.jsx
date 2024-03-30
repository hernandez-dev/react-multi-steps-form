import { useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"

// components
import Button from "./components/Button.jsx"

export default function StepsForm() {
  // app state
  const { steps, currentStep } = useContext(StateContext)

  // current step
  const step = steps[currentStep]

  return(
    <form className="flex flex-col flex-1 space-y-1">
      <section className="flex-1">
        current step
      </section>
      <footer className="flex justify-between">
        <Button
          type="button"
          action="prev"
          bg="bg-transparent"
          color="text-cool-gray"
          disabled={currentStep === 0}
          onClick={() => console.log("click")}
        >
          go back
        </Button>
        <Button
          type="button"
          action="prev"
          bg="bg-marine-blue"
          color="text-white"
          disabled={currentStep === (steps.length - 1)}
          onClick={() => console.log("click")}
        >
          next step
        </Button>
      </footer>
    </form>
  )
}
