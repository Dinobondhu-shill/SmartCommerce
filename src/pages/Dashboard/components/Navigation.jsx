"use client"

const navItems = [
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "cart", label: "Cart", icon: "🛒" },
  { id: "wallet", label: "Wallet", icon: "💳" },
  { id: "addresses", label: "Addresses", icon: "📍" },
  { id: "returns", label: "Returns", icon: "↩️" },
  { id: "reviews", label: "Reviews", icon: "⭐" },
]

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="bg-white border-b border-border overflow-x-auto sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-4 md:gap-4 whitespace-nowrap md:whitespace-normal overflow-x-auto md:overflow-x-visible">
          <button
            onClick={() => onNavigate("dashboard")}
            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${
              currentPage === "dashboard"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            Dashboard
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm md:text-base flex items-center gap-2 ${
                currentPage === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
