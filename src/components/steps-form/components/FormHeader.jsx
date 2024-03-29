export default function FormHeader({ step }) {
  return(
    <header className="space-y-4">
      <h1 className="font-bold text-3xl leading-none">
        {step.heading}
      </h1>
      <p className="leading-none">
        {step.description}
      </p>
    </header>
  )
}
