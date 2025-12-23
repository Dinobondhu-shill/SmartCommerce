export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MyStore</h1>
              <p className="text-xs text-muted-foreground">User Profile</p>
            </div>
          </div>
          <div className="hidden sm:block text-center">
            <h2 className="text-primary font-semibold">Welcome to Your Profile</h2>
            <p className="text-xs text-muted-foreground">Manage all your account details</p>
          </div>
        </div>
      </div>
    </header>
  )
}
