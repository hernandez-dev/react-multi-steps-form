export default function Button({
  type,
  action,
  w,
  bg,
  color,
  disabled,
  onClick,
  hover,
  focus,
  children
}) {
  return(
    <button
      type={type}
      data-action={action}
      className={`outline-none flex items-center justify-center ${w} h-12 ${bg} rounded-lg font-semibold text-lg ${color} capitalize transition duration-100 ${hover} ${focus}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
