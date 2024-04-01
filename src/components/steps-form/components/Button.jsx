export default function Button({
  type,
  action,
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
      className={`block w-32 ${bg} rounded-lg font-semibold text-lg ${color} capitalize leading-[3rem] transition duration-100 ${hover} ${focus}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
