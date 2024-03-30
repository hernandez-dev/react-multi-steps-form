export default function PlanSelector({ step, dispatch }) {
  return(
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-5">
        {step.modalities.map(modality => {
          return(
            <button
              key={modality.id}
              type="button"
              className={`flex flex-col justify-between h-[250px] p-4 border ${modality.selected ? 'bg-sky-100/30 border-sky-500' : 'border-gray-300'} rounded-lg text-left transition duration-300`}
              onClick={() => dispatch({ type: "select-plan", step: 1, id: modality.id })}
            >
              <span className="block w-12">
                <img src={`/images/${modality.icon}`} alt={`${modality.name} icon`} className="block w-full" />
              </span>
              <div className="space-y-3">
                <h4 className="font-bold text-lg capitalize leading-none">
                  {modality.name}
                </h4>
                <p className="leading-none">
                  ${modality.price}/{step.monthly ? 'mo' : 'yr'}
                </p>
                <span className="block leading-none">
                  2 months free
                </span>
              </div>
            </button>
          )
        })}
      </div>
      <div className="flex items-center justify-center h-12 bg-gray-100 rounded-lg space-x-3 font-bold tracking-wide">
        <span className="block leading-none">
          monthly
        </span>
        <button
          type="button"
          className={`flex ${step.monthly ? '' : 'justify-end'} w-12 p-1 bg-sky-500 rounded-full`}
          onClick={() => dispatch({ type: "select-monthly-plan", step: 1, value: !step.monthly })}
        >
          <span className="block w-4 h-4 rounded-full bg-white"></span>
        </button>
        <span className="block leading-none">
          yearly
        </span>
      </div>
    </div>
  )
}
