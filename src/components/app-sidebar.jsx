import * as React from "react"
import {
  Cpu,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
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
    name: "User Name",
    email: "dinu.webdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  shops: [
    {
      name: "Whatever",
      logo: GalleryVerticalEnd,
    }
   
  ],
  category: 
  [
      {
        "title": "Technology",
        icon: Cpu, 
        "path": "/technology",
        "subcategories": [
          {
            "title": "Artificial Intelligence",
            "path": "/technology/ai"
          },
          {
            "title": "Blockchain",
            "path": "/technology/blockchain"
          },
          {
            "title": "Cybersecurity",
            "path": "/technology/cybersecurity"
          }
        ]
      },
      {
        "title": "Lifestyle",
        icon: PieChart, 
        "path": "/lifestyle",
        "subcategories": [
          {
            "title": "Health & Wellness",
            "path": "/lifestyle/health"
          },
          {
            "title": "Travel",
            "path": "/lifestyle/travel"
          },
          {
            "title": "Food & Drinks",
            "path": "/lifestyle/food-drinks",
            "subcategories": [
              {
                "title": "Vegan Recipes",
                "path": "/lifestyle/food-drinks/vegan"
              },
              {
                "title": "Cocktail Recipes",
                "path": "/lifestyle/food-drinks/cocktails"
              }
            ]
          }
        ]
      },
      {
        "title": "Entertainment",
        icon: PieChart, 
        "path": "/entertainment",
        "subcategories": [
          {
            "title": "Movies",
            "path": "/entertainment/movies"
          },
          {
            "title": "Music",
            "path": "/entertainment/music"
          },
          {
            "title": "Gaming",
            "path": "/entertainment/gaming",
            "subcategories": [
              {
                "title": "PC Games",
                "path": "/entertainment/gaming/pc"
              },
              {
                "title": "Console Games",
                "path": "/entertainment/gaming/console"
              },
              {
                "title": "Mobile Games",
                "path": "/entertainment/gaming/mobile"
              }
            ]
          }
        ]
      },
      {
        "title": "Education",
        icon: PieChart, 
        "path": "/education",
        "subcategories": [
          {
            "title": "Online Courses",
            "path": "/education/online-courses"
          },
          {
            "title": "Certifications",
            "path": "/education/certifications"
          },
          {
            "title": "E-books",
            "path": "/education/ebooks"
          }
        ]
      },
      {
        "title": "Business",
        icon: PieChart, 
        "path": "/business",
        "subcategories": [
          {
            "title": "Startups",
            "path": "/business/startups"
          },
          {
            "title": "Finance",
            "path": "/business/finance",
            icon: PieChart, 
            "subcategories": [
              {
                "title": "Investing",
                "path": "/business/finance/investing"
              },
              {
                "title": "Cryptocurrency",
                "path": "/business/finance/crypto"
              }
            ]
          }
        ]
      }
    ],
  pages: [
    {
      name: "About Us",
      url: "#",
      icon: Frame,
    },
    {
      name: "Blogs",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Terms And Conditions",
      url: "#",
      icon: Map,
    },
    {
      name: "Refund Policies",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <NavUser user={data.user} />
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.category} />
        <NavProjects projects={data.pages} />
      </SidebarContent>
      <SidebarFooter>
      <TeamSwitcher teams={data.shops} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
