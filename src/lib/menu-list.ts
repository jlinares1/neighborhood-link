import {
  Building2,
  FileText,
  FolderInput,
  Home,
  LucideIcon,
  Mail,
  Receipt,
  Users,
} from "lucide-react";

type Group = {
  groupLabel: string;
  menus: Menu[];
};

type Menu = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          title: "Dashboard",
          url: "/",
          icon: Home,
        },
        {
          title: "Units",
          url: "/units",
          icon: Building2,
        },
      ],
    },
    {
      groupLabel: "Community",
      menus: [
        { title: "Members", url: "/members", icon: Users },
        {
          title: "Communication",
          url: "/communication",
          icon: Mail,
        },
        {
          title: "Documents",
          url: "/documents",
          icon: FileText,
        },
      ],
    },
    {
      groupLabel: "Financials",
      menus: [{ title: "Billing", url: "/billing", icon: Receipt }],
    },
    {
      groupLabel: "Services",
      menus: [{ title: "Work Orders", url: "/work-orders", icon: FolderInput }],
    },
  ];
}
