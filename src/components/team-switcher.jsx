import * as React from "react"
import { ChevronsUpDown, MessageCircle, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";

export function TeamSwitcher() {

  return (
    <SidebarMenu>
      <Link to="/message">
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div
                className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <MessageCircle className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Message with Shopix</span>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
      </Link>
    </SidebarMenu>
  );
}
