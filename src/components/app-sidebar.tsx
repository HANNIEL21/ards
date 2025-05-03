import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  CogIcon,
  Command,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Document Requests",
      url: "/dashboard/document_requests",
      icon: Users,
      items: [
        {
          title: "All",
          url: "/dashboard/document_requests",
        },
        {
          title: "Pending",
          url: "/dashboard/document_requests?status=pending",
        },
        {
          title: "Processing",
          url: "/dashboard/document_requests?status=processing",
        },
        {
          title: "Approved",
          url: "/dashboard/document_requests?status=approved",
        },
        {
          title: "Delivered",
          url: "/dashboard/document_requests?status=delivered",
        },
        {
          title: "Failed",
          url: "/dashboard/document_requests?status=failed",
        },
      ],
    },
    {
      title: "Payments",
      url: "/dashboard/payments",
      icon: Users,
      items: [
        {
          title: "All",
          url: "/dashboard/payments",
        },
        {
          title: "Pending",
          url: "/dashboard/payments?status=pending",
        },
        {
          title: "Successful",
          url: "/dashboard/payments?status=successful",
        },
        {
          title: "Failed",
          url: "/dashboard/payments?status=failed",
        },
      ],
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: Users,
      items: [
        {
          title: "Admins",
          url: "/dashboard/users/admins",
        },
        {
          title: "Alumni",
          url: "/dashboard/users/alumni",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Statement of result",
          url: "/dashboard/statements",
        },
        {
          title: "Transcript",
          url: "/dashboard/transcripts",
        },
        {
          title: "Certificate",
          url: "/dashboard/certificates",
        },
      ],
    },
    {
      title: "Proccess",
      url: "#",
      icon: AudioWaveform,
      items: [
        {
          title: "Upload",
          url: "/dashboard/upload",
        },
        {
          title: "Verification",
          url: "/dashboard/verification",
        },
        {
          title: "Stamp",
          url: "/dashboard/stamp",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: CogIcon,
      items: [
        {
          title: "Payment Gateways",
          url: "/dashboard/settings/payment_gateways",
        },
        {
          title: "Document Types",
          url: "/dashboard/settings/document_types",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
    {
      name: "Analisys",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
