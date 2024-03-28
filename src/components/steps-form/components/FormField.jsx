export default function Button({ bg, color, children }) {
  return(
    <button className={`block ${bg} rounded-md ${color} leading-10`}>
      {children}
    </button>
  )
}
