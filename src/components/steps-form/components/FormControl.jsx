export default function FormControl({
  field,
  index,
  invalid,
  hint,
  dispatch
}) {
  return(
    <div className="space-y-3 mt-5 first:mt-0">
      <div className="flex items-center">
        <label htmlFor={field.id} className="block flex-1 font-semibold text-marine-blue capitalize leading-none">
          {field.label}
        </label>
        <span className={`${invalid ? "block" : "hidden"} font-semibold text-strawberry-red leading-none`}>
          {hint}
        </span>
      </div>
      <div className="overflow-hidden">
        <input
          id={field.id}
          type={field.type}
          name={field.name}
          value={field.value}
          className="outline-none block w-full px-4 background-transparent border border-light-gray rounded-lg text-cool-gray leading-[3rem]"
          onChange={e => dispatch({
            type: "set-form-control",
            step: 0,
            index: index,
            value: e.target.value
          })}
        />
      </div>
    </div>
  )
}
