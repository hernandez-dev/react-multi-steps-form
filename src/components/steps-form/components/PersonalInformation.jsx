// components
import FormControl from "./FormControl.jsx"

export default function PersonalInformation({ step, dispatch }) {
  return(
    <div className="space-y-4">
      {step.fields.map(field => <FormControl key={field.id} element={field} dispatch={dispatch} />)}
    </div>
  )
}
