import { useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"

export default function StepsForm() {
  // app state
  const { steps, currentStep } = useContext(StateContext)

  return(
    <form className="flex flex-col flex-1 space-y-1">
      <section className="flex items-center justify-center flex-1 p-2 bg-sky-100 rounded capitalize">
        form steps
      </section>
      <footer className="flex items-center justify-center h-14 p-2 rounded bg-sky-100 capitalize">
        form buttons
      </footer>
    </form>
  )
}
