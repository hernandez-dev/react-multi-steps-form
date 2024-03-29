export default function FormControl({ element, dispatch }) {
  return(
    <div className="space-y-3 mt-5 first:mt-0">
      <label htmlFor={element.id} className="block w-full leading-none">
        {element.label}
      </label>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <input
          id={element.id}
          type={element.type}
          name={element.name}
          value={element.value}
          className="outline-none block w-full px-2 background-transparent leading-10"
          onChange={(e) => dispatch({ type: "", value: e.target.value })}
        />
      </div>
    </div>
  )
}
