export default function FormControl({ element, dispatch }) {
  return(
    <div className="space-y-3 mt-5 first:mt-0">
      <label htmlFor={element.id} className="block w-full text-marine-blue leading-none">
        {element.label}
      </label>
      <div className="border border-light-gray rounded-lg overflow-hidden">
        <input
          id={element.id}
          type={element.type}
          name={element.name}
          value={element.value}
          className="outline-none block w-full px-4 background-transparent text-cool-gray leading-[3rem]"
          onChange={(e) => dispatch({ type: "", value: e.target.value })}
        />
      </div>
    </div>
  )
}
