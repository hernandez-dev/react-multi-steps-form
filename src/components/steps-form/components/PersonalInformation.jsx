// components
import FormControl from "./FormControl.jsx"

export default function PersonalInformation({ step, dispatch }) {
  return(
    <div className="space-y-4">
      {step.fields.map((field, index) => (
        <FormControl
          key={field.id}
          field={field}
          index={index}
          invalid={field.invalid}
          hint={field.hint}
          dispatch={dispatch} />
      ))}
    </div>
  )
}
