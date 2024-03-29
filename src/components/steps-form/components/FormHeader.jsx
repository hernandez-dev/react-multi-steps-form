export default function FormHeader({ step }) {
  return(
    <header className="space-y-4">
      <h1 className="font-bold text-3xl text-marine-blue leading-none">
        {step.heading}
      </h1>
      <p className="text-cool-gray leading-none">
        {step.description}
      </p>
    </header>
  )
}
