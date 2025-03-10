"use client"

export function BackToOptionsButton({ className, href = "/", onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) {
      onClick()
    } else if (href) {
      // Navigate to href - replace with your navigation method
      window.location.href = href
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`group text-purple-700 hover:text-purple-900 hover:bg-purple-50
        flex items-center gap-2 p-2 rounded-full
        transition-all duration-300 ${className || ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-1"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      <span className="font-medium">Back</span>
    </button>
  )
}

