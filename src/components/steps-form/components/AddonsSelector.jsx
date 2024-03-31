export default function AddonsSelector({
  step,
  monthly,
  dispatch
}) {
  /*
   * Use context provider get selected
   * plan modality
   * */

  return(
    <div className="space-y-4">
      {step.addons.map((addon, index) => {
        return(
          <button
            key={addon.id}
            type="button"
            className={`flex items-center w-full p-5 border ${addon.selected ? 'bg-alabaster border-purplish-blue' : 'border-gray-300'} rounded-lg transition duration-300`}
            onClick={() => dispatch({
              type: "select-addon",
              step: 2,
              index: index,
              value: !addon.selected
            })}
          >
            <span className={`flex items-center justify-center w-6 h-6 p-1 border rounded ${addon.selected ? 'bg-purplish-blue border-purplish-blue' : 'border-gray-300'} transition duration-300`}>
              <img src={`/images/icon-checkmark.svg`} alt="icon checkmark" className="block w-full" />
            </span>
            <div className="flex-1 pl-5 space-y-2 text-left">
              <h4 className="font-semibold text-lg text-marine-blue capitalize leading-none">
                {addon.name}
              </h4>
              <p className="text-cool-gray leading-none">
                {addon.description}
              </p>
            </div>
            <span className="">
              +${addon.price * (monthly ? 1 : 10)}/{monthly ? "mo" : "yr"}
            </span>
          </button>
        )
      })}
    </div>
  ) // component return end
}
