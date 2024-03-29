export default function AddonsSelector({
  step,
  dispatch
}) {
  /*
   * Use context provider get selected
   * plan modality
   * */

  return(
    <div className="space-y-4">
      {step.addons.map(addon => {
        return(
          <button
            key={addon.id}
            type="button"
            className={`flex items-center w-full p-5 border ${addon.selected ? 'bg-sky-100/30 border-sky-400' : 'border-gray-300'} rounded-lg`}
          >
            <span className={`flex items-center justify-center w-6 h-6 p-1 border rounded ${addon.selected ? 'bg-sky-300 border-sky-300' : 'border-gray-300'}`}>
              <img src={`/images/icon-checkmark.svg`} alt="icon checkmark" className="block w-full" />
            </span>
            <div className="flex-1 pl-5 space-y-2 text-left">
              <h4 className="font-semibold text-lg capitalize leading-none">
                {addon.name}
              </h4>
              <p className="text-sm leading-none">
                {addon.description}
              </p>
            </div>
            <span className="">
              +${addon.price}/mo
            </span>
          </button>
        )
      })}
    </div>
  ) // component return end
}
