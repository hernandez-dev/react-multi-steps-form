export default function Button({
  bg,
  color,
  children
}) {
  return(
    <button className={`block w-32 ${bg} rounded-lg font-semibold text-lg ${color} capitalize leading-[3rem]`}>
      {children}
    </button>
  )
}
