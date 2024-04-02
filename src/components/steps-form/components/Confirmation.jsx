export default function Confirmation() {
  return(
    <div className="absolute top-0 left-0 z-10 flex w-full h-full bg-white">
      <div className="px-6 m-auto space-y-5 text-center">
        <span className="block w-16 h-16 mx-auto rounded-full overflow-hidden">
          <img src="/images/icon-thank-you.svg" alt="confirmation icon" className="block w-full" />
        </span>
        <h3 className="pt-2 font-bold text-3xl text-marine-blue leading-none">
          Thank you!
        </h3>
        <p className="text-lg text-cool-gray">
          Thanks from confirmint your subscription! We hope you have fun using our platform. If you ever need support, plase feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}
