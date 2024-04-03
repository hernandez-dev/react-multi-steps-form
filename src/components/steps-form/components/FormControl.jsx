export default function FormControl({
  field,
  index,
  invalid,
  hint,
  dispatch
}) {
  return(
    <div className="space-y-[11px]">
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
          className={`outline-none block w-full px-4 background-transparent border ${invalid ? "border-strawberry-red" : "border-light-gray focus:border-marine-blue"} rounded-lg text-cool-gray leading-[48px] transition duration-300`}
          onChange={e => dispatch({
            type: "set-form-control",
            step: 0,
            index: index,
            value: e.target.value
          })}
          placeholder={field.placeholder}
        />
      </div>
    </div>
  )
}
