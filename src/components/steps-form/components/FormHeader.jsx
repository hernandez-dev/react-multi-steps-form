export default function FormHeader({ step }) {
  return(
    <header className="pb-10 space-y-4">
      <h1 className="font-bold text-3xl text-marine-blue leading-none">
        {step.heading.charAt(0).toUpperCase() + step.heading.slice(1)}
      </h1>
      <p className="text-cool-gray leading-none">
        {step.description.charAt(0).toUpperCase() + step.description.slice(1)}
      </p>
    </header>
  )
}
