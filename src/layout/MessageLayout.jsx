import { AppSidebar } from "@/components/app-sidebar"
import CustomNav from "@/components/CustomNav";
import MobileMenu from "@/components/MobileMenu";
import Nav from "@/components/Nav";
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Footer from "@/pages/Homepage/Footer";
import ScrollToTop from "@/pages/Utilites/ScrollToTop";
import { Outlet } from "react-router-dom";

const MessageLayout = () => {
    return (
        <>
     <ScrollToTop /> 
        <SidebarProvider className="bg-gradient-to-b from-slate-50 to-slate-100">
        <AppSidebar className="bg-gradient-to-b "/>
        <SidebarInset className="bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="flex flex-1 flex-col">
            <div className="grid auto-rows-min grid-cols-1">
             <Outlet />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <MobileMenu />
      </>
    );
};

export default MessageLayout;