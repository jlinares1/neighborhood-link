import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { getMenuList } from "@/lib/menu-list";
import Link from "next/link";
import SignoutAlertDialog from "./signout-alert-dialog";
import { LinkIcon } from "lucide-react";

export default function SideBarNav() {
  const navMenu = getMenuList();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center items-center">
          <LinkIcon />
          <label className="font-bold text-xl text-blue-700 pl-1">
            Neighborhood Link
          </label>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navMenu.map((item) => (
          <SidebarGroup key={item.groupLabel}>
            <SidebarGroupLabel>{item.groupLabel}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.menus.map((menu) => (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton asChild>
                      <Link href={menu.url}>
                        <menu.icon />
                        <span>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <SignoutAlertDialog />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
