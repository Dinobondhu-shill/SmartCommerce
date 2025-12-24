export default function ActionButton({ label, variant = "primary", onClick, disabled = false }) {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all text-sm w-full"

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50",
    success: "bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 shadow-md",
    danger: "border-2 border-destructive text-destructive hover:bg-destructive hover:text-white disabled:opacity-50",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90 disabled:opacity-50",
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]}`}>
      {label}
    </button>
  )
}