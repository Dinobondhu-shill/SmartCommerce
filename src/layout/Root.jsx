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
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
     
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="hidden md:flex h-8 bg-white  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-8">
            
            <CustomNav />
          </header>
          <Nav />
          <div className="flex flex-1 flex-col">
            <div className="grid auto-rows-min grid-cols-1">
             <Outlet />
            </div>
          </div>
          <Footer />
          <MobileMenu />
        </SidebarInset>
      </SidebarProvider>
     
      </>
    );
};

export default Root;