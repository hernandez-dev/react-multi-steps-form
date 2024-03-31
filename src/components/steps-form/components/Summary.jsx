export default function Summary({ step, dispatch }) {
  return(
    <div className="">
      <div className="p-5 bg-alabaster rounded-xl">
        <div className="flex items-center text-cool-gray">
          <div className="flex-1 space-y-2">
            <h3 className="font-bold text-lg text-marine-blue leading-none">
              Arcade ({step.summary.plan.monthly ? "Monthly" : "Yearly"})
            </h3>
            <button
              type="button"
              className="underline"
              onClick={() => dispatch({ type: "set-current-step", value: 1 })}
            >
              Change
            </button>
          </div>
          <span className="font-bold text-marine-blue">
            ${step.summary.plan.price}/{step.summary.label}
          </span>
        </div>
        <div className="pt-5 mt-6 space-y-2 border-t border-light-gray">
          {step.summary.addons.map(addon => {
            return(
              <div key={addon.id} className="flex items-center text-cool-gray">
                <p className="flex-1 leading-none">
                  {addon.name.charAt(0).toUpperCase() + addon.name.slice(1)}
                </p>
                <span className="text-marine-blue">
                  +{addon.price}/{step.summary.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex items-center p-5 mt-5">
        <p className="flex-1 text-cool-gray leading-none">
          Total (per {step.summary.plan.monthly ? "month" : "year"})
        </p>
        <span className="font-bold text-xl text-purplish-blue">
          ${step.summary.plan.price + step.summary.addons.reduce((acc, addon) => acc += addon.price, 0)}/{step.summary.label}
        </span>
      </div>
    </div>
  )
}
