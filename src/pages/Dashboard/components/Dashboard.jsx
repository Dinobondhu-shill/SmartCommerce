import ActionButton from "./ActionButton";
import OrdersCard from "./cards/OrdersCard";
import ReviewCard from "./cards/ReviewCard";
import UserInfoCard from "./cards/UserInfoCard";


export default function Dashboard({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Main Grid - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* User Information Card */}
        <div className="md:col-span-1 lg:col-span-1">
          <UserInfoCard />
        </div>

        {/* Complete Orders Card */}
        <div className="md:col-span-1 lg:col-span-1">
          <OrdersCard />
        </div>

        {/* Review Card */}
        <div className="md:col-span-1 lg:col-span-1">
          <ReviewCard />
        </div>
      </div>

      {/* Action Buttons - Mobile First Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
        <ActionButton label="Edit Info" variant="success" onClick={() => console.log("Edit")} />
        <ActionButton label="Logout" variant="danger" onClick={() => console.log("Logout")} />
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-lg border border-border p-6 text-center">
        <p className="text-muted-foreground text-sm">
          Need help? Contact our support team or explore more features above.
        </p>
      </div>
    </div>
  )
}
