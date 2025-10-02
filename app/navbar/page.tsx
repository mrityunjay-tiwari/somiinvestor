"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const financeComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Investor Presentation",
    href: "/financials/investor-presentation",
    description:
      "",
  },    
  {
    title: "Annual Results",
    href: "/financials/annual-results",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Quarterly Results",
    href: "/financials/quarterly-results",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Integrated Filling Financial",
    href: "/financials/integrated-filing-financial",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Annual Reports",
    href: "/financials/annual-reports",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "ShareHolding Pattern",
    href: "/financials/shareholding-pattern",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Annual Return",
    href: "/financials/annual-return",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Related Party Transaction",
    href: "/financials/related-party-transaction",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const homeComponents: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/home/about",
    description:
      "",
  },
  {
    title: "Vision",
    href: "/home/vision",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Unclaimed Dividend",
    href: "/home/unclaimed-dividend",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Regulation 46",
    href: "/home/regulation-46",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Regulation 62",
    href: "/home/regulation-62",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
]

const corporateInformationComponents: {title: string; href: string}[] = [
    {
    title: "Board of Directors",
    href: "/corporate-information/board-of-directors"
    },
    {
    title: "Brief Profile of Board of Directors",
    href: "/corporate-information/brief-profile-of-board-of-directors"
    },
    {
    title: "Board Committees",
    href: "/corporate-information/board-committees"
    },
    {
    title: "Share Holder Information",
    href: "/corporate-information/share-holder-information"
    },
    {
    title: "Investor Grievance Redressal Officer",
    href: "/corporate-information/investor-grievance-redressal-officer"
    },
    {
    title: "Grievance Redressal",
    href: "/corporate-information/grievance-redressal"
    },
]

const otherFilingsComponents: {title: string, href: string}[] = [
    {
        title: "Notice of Meetings",
        href: "/other-filings/notice-of-meetings"
    },
    {
        title: "Outcome of GM and BM",
        href: "/other-filings/outcome-of-gm-and-bm"
    },
    {
        title: "Half Yearly and Yearly Compliances",
        href: "/other-filings/half-yearly-and-yearly-compliances"
    },
    {
        title: "Reconcillation of Share Capital Audit Report",
        href: "/other-filings/reconcillation-of-share-capital-audit-report"
    },
    {
        title: "SEBI Substantial Acquisition of Shares Takeovers Regulations 2011",
        href: "/other-filings/sebi-substancial-acquition-of-shares-takeover-regulations-2011"
    },
    {
        title: "SEBI Prohibition of Insider Trading Regulations 2015",
        href: "/other-filings/sebi-prohibition-of-insider-trading-regulations-2015"
    },
    {
        title: "Minutes of AGM and BM",
        href: "/other-filings/minutes-of-agm-and-bm"
    },
    {
        title: "Scrutnizers Report",
        href: "/other-filings/scrutinizers-report"
    },
    {
        title: "Others",
        href: "/other-filings/others"
    },
    {
        title: "Press Release",
        href: "/other-filings/press-release"
    },
    {
        title: "Secretial Compliance Report Regulation 24A",
        href: "/other-filings/secretial-compliance-report-regulation-24a"
    },
    {
        title: "Regulation 74(5) SEBI DB Regu 2018",
        href: "/other-filings/regulation-74(5)-sebi(dp)-regu-2018"
    },
]

const governanceComponents: {title: string, href: string}[] = [
    {
        title: "Policies",
        href: "/governance/policies"
    },
    {
        title: "Code of Conduct",
        href: "/governance/code-of-conduct"
    },
    {
        title: "Integrated Filing Governance",
        href: "/governance/integrated-filing-governance"
    },
    {
        title: "Cloasure of Trading Window",
        href: "/governance/closure-of-trading-window"
    },
    {
        title: "Credit Rating",
        href: "/governance/credit-rating"
    },
    {
        title: "Details of Familiarzation Programmes",
        href: "/governance/details-of-familarization-programmes"
    },
    {
        title: "Corporate Governance",
        href: "/governance/corporate-governance"
    },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>       

         <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[450px]">
              {homeComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="rounded border-r border-l bg-zinc-50"
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Financials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {financeComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="rounded border-r border-l bg-zinc-50"
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Corporate Information</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {corporateInformationComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="rounded border-r border-l bg-zinc-50"
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Other Filings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[550px]">
              {otherFilingsComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="rounded border-r border-l bg-zinc-50"
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Governance</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 md:w-[400px] md:grid-cols-2 lg:w-[550px]">
              {governanceComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="rounded border-r border-l bg-zinc-50"
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium hover:underline underline-offset-4">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug ">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
