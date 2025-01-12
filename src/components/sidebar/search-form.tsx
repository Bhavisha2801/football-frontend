import { Search } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props} className="relative">
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          {/* Input Field */}
          <SidebarInput
            id="search"
            placeholder="Search"
            className="w-full text-xs text-white placeholder:text-white placeholder:text-center rounded-xl bg-[#303030] py-2 pl-10" // Left padding for icon space
          />
          {/* Search Icon */}
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            size={20} // Adjust icon size as needed
          />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
