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
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
     
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="hidden md:flex h-8 bg-[#983ce95f]  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-8">
            <div className="flex items-center gap-1 pl-4">
              <SidebarTrigger className="-ml-2" />
              <Separator orientation="vertical" className="mr-1 h-4" />
            </div>
            <CustomNav />
          </header>
          <Nav />
          <div className="flex flex-1 flex-col p-4 pt-0">
            <div className="grid auto-rows-min grid-cols-1">
             <Outlet />
            </div>
          </div>
        </SidebarInset>
        
      </SidebarProvider>
      </>
    );
};

export default Root;