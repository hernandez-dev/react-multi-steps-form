export default function PlanSelector({ step, dispatch }) {
  return(
    <div className="space-y-8">
      <div className="grid gap-[18px] desktop:grid-cols-3">
        {step.modalities.map(modality => {
          return(
            <button
              key={modality.id}
              type="button"
              className={`outline-none flex w-full p-4 border ${modality.selected ? 'bg-alabaster border-purplish-blue' : 'border-gray-300'} rounded-xl text-left transition duration-300 desktop:flex-col desktop:justify-between`}
              onClick={() => dispatch({ type: "select-plan", step: 1, id: modality.id })}
            >
              <span className="block w-[40px]">
                <img src={`/images/${modality.icon}`} alt={`${modality.name} icon`} className="block w-full" />
              </span>
              <div className="pl-4 space-y-3 desktop:pl-0 desktop:mt-[48px]">
                <h4 className="font-bold text-lg capitalize text-marine-blue leading-none">
                  {modality.name}
                </h4>
                <p className="text-cool-gray leading-none">
                  ${modality.price * (step.monthly ? 1 : 10)}/{step.monthly ? 'mo' : 'yr'}
                </p>
                {step.monthly ? "" : (
                  <span className="block text-marine-blue leading-none">
                    2 months free
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
      <div className="flex items-center justify-center h-12 bg-alabaster rounded-lg space-x-6 font-bold capitalize tracking-wide">
        <span className="block text-marine-blue leading-none">
          monthly
        </span>
        <button
          type="button"
          className={`flex ${step.monthly ? '' : 'justify-end'} w-[38px] h-[20px] p-[4px] bg-marine-blue rounded-full`}
          onClick={() => dispatch({ type: "select-monthly-plan", step: 1, value: !step.monthly })}
        >
          <span className="block w-[12px] h-[12px] rounded-full bg-white"></span>
        </button>
        <span className="block text-marine-blue leading-none">
          yearly
        </span>
      </div>
    </div>
  )
}
