import { useState } from "react"
import CartPage from "@/pages/Cart/CartPage"
import CustomerWallet from "@/pages/Profile/Wallet"
import AddressBook from "@/pages/Profile/AddressBook"
import MyReturn from "@/pages/Profile/MyReturn"
import MyCancellations from "@/pages/Profile/MyCancelllation"
import MyPaymentsPage from "@/pages/Profile/MyPayment"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Dashboard from "../components/Dashboard"


export default function Page() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const renderPage = () => {
    switch (currentPage) {
      case "orders":
        return <MyPaymentsPage />
      case "cart":
        return <CartPage />
      case "wallet":
        return <CustomerWallet />
      case "addresses":
        return <AddressBook />
      case "returns":
        return <MyReturn />
      case "reviews":
        return <MyCancellations />
      default:
        return <Dashboard onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-row">
     <div className="w-1/4">
       <Header />
     </div>
        <div className="flex-1 p-4">
       <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-colors duration-300">{renderPage()}</main>
     </div>
    </div>
  )
}