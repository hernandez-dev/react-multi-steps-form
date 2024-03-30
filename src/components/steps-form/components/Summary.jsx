export default function Summary({ step }) {
  const addons = [
    {
      id: 1,
      name: "online service",
      price: 1
    },
    {
      id: 2,
      name: "larger storage",
      price: 2
    },
  ]

  return(
    <div className="">
      <div className="p-5 bg-pastel-blue/10 rounded-xl">
        <div className="flex items-center text-cool-gray">
          <div className="flex-1 space-y-2">
            <h3 className="font-bold text-lg text-marine-blue leading-none">
              Arcade (Yearly)
            </h3>
            <button className="underline">
              Change
            </button>
          </div>
          <span className="font-bold text-marine-blue">
            $90/yr
          </span>
        </div>
        <div className="pt-5 mt-6 space-y-2 border-t border-pastel-blue/30">
          {addons.map(addon => {
            return(
              <div key={addon.id} className="flex items-center text-cool-gray">
                <p className="flex-1 leading-none">
                  {addon.name.charAt(0).toUpperCase() + addon.name.slice(1)}
                </p>
                <span className="text-marine-blue">
                  +{addon.price}/yr
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex items-center p-5 mt-5">
        <p className="flex-1 text-cool-gray leading-none">
          Total (per year)
        </p>
        <span className="font-bold text-xl text-purplish-blue">
          $120/yr
        </span>
      </div>
    </div>
  )
}
