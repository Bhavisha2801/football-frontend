"use client"

import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar className="scrollbar-hide overflow-y-auto" />
      {/* <SidebarInset> */}
        <SidebarTrigger className="lg:hidden md:hidden"/>
      {/* </SidebarInset> */}
    </SidebarProvider>
  )
}
