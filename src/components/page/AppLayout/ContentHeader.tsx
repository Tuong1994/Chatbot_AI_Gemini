import { FC } from "react";
import { Title } from "@/components/ui/typography";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ContentHeader: FC = () => {
  const t = useTranslations("appLayout.sidebar");

  const { isMobile } = useSidebar();

  return (
    <div className="min-w-full px-5 py-3 sticky top-0 z-20 flex items-center justify-between bg-background">
      {isMobile && <SidebarTrigger />}
      {!isMobile && (
        <>
          <Title level={4}>Chatbot AI</Title>
          <Title level={4}>Chat title</Title>
        </>
      )}
      <div className="flex gap-2.5 w-min">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreVertical className="size-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "end" : "start"}
          >
            <DropdownMenuItem>
              <Pen className="text-muted-foreground" />
              <span>{t("actions.rename")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="text-muted-foreground" />
              <span>{t("actions.delete")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="grayscale" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default ContentHeader;
