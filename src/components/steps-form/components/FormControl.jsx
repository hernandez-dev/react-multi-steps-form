export default function FormControl({ field, index, dispatch }) {
  return(
    <div className="space-y-3 mt-5 first:mt-0">
      <label htmlFor={field.id} className="block w-full font-semibold text-marine-blue capitalize leading-none">
        {field.label}
      </label>
      <div className="border border-light-gray rounded-lg overflow-hidden">
        <input
          id={field.id}
          type={field.type}
          name={field.name}
          value={field.value}
          className="outline-none block w-full px-4 background-transparent text-cool-gray leading-[3rem]"
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
