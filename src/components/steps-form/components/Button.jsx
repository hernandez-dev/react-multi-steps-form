export default function Button({
  bg,
  color,
  children
}) {
  return(
    <button className={`block w-28 ${bg} rounded font-semibold text-lg ${color} capitalize leading-10`}>
      {children}
    </button>
  )
}
