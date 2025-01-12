"use client"

import * as React from "react"
import {
  Home,
  Trophy,
  Map,
  MessageCircle,
  Bell,
  Users,
  User,
  MapPin,
  Settings,
  Download,
} from "lucide-react";


import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SearchForm } from "./search-form"
import { NavSecondary } from "./nav-secondary"
import { Separator } from "../ui/separator"
// import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "bhavisha",
    email: "nayibhavisha@gmail.com",
    avatar: User,
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home, // Represents the homepage
      isActive: true,
    },
    {
      title: "Leader Board",
      url: "#",
      icon: Trophy, // Represents a leaderboard or achievements
      badge: "10",
    },
    {
      title: "Ground",
      url: "#",
      icon: Map, // Represents locations or grounds
      badge: "10",
    },
    {
      title: "Chat",
      url: "#",
      icon: MessageCircle, // Represents messaging
      badge: "10",
    },
    {
      title: "Notification",
      url: "#",
      icon: Bell, // Represents notifications
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Followed Team",
      url: "#",
      icon: Users, // Represents a group or team
      isActive: false,
      items: [
        {
          title: "Team Member 1",
          url: "#",
        },
        {
          title: "Team Member 2",
          url: "#",
        },
      ],
    },
    {
      title: "Followed Players",
      url: "#",
      icon: User, // Represents an individual player
      isActive: false,
      items: [
        {
          title: "Player 1",
          url: "#",
        },
        {
          title: "Player 2",
          url: "#",
        },
      ],
    },
    {
      title: "Followed Ground",
      url: "#",
      icon: MapPin, // Represents specific grounds or locations
      isActive: false,
      items: [
        {
          title: "Ground 1",
          url: "#",
        },
        {
          title: "Ground 2",
          url: "#",
        },
      ],
    },
  ],
  navThird: [
    {
      title: "Settings",
      url: "#",
      icon: Settings, // Represents settings
      isActive: true,
    },
    {
      title: "Download The App",
      url: "#",
      icon: Download, // Represents download functionality
      badge: "10",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader className="p-2 mb-4">
        <h1 className="font-bold italic ml-6 mt-6 mb-2">FOOTBALL<span className="text-[#c3cc5a] font-light" >SHURU</span></h1>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <Separator />
        <NavSecondary items={data.navSecondary} />
        <Separator />
        <NavMain items={data.navThird} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
