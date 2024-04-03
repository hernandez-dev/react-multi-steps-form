import { useContext } from "react"

// context
import StateContext from "../../context/StateContext.js"

export default function Sidebar() {
  // state
  const { steps, currentStep } = useContext(StateContext)

  return(
    <aside className="relative">
      <picture>
        <source media="(min-width:1100px)" srcSet="/images/bg-sidebar-desktop.svg" />
        <img src="/images/bg-sidebar-mobile.svg" alt="sidebar background" className="block w-full" />
      </picture>
      <div className="absolute top-0 left-0 z-10 flex items-start justify-center gap-5 w-full h-full p-8 pt-10 desktop:block desktop:space-y-8">
        {steps.map((step, index) => {
          const active = index === currentStep
          return(
            <div key={step.id} className="flex">
              <span className={`flex items-center justify-center w-[33px] h-[33px] border ${active ? "bg-light-blue border-light-blue text-marine-blue" : "border-white text-white"} font-bold rounded-full`}>
                {index + 1}
              </span>
              <div className="hidden flex-1 pl-5 text-white uppercase tracking-widest desktop:flex desktop:flex-col desktop:justify-between">
                <h3 className="text-xs leading-none">
                  step {index + 1}
                </h3>
                <h2 className="mt-1 font-semibold text-sm leading-none">
                  {step.subHeading}
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
