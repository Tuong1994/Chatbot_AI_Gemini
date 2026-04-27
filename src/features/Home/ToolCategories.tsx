"use client";

import { FC, useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Title } from "@/components/ui/typography";
import { EToolType } from "@/services/conversation/enum";
import { useTranslations } from "next-intl";
import Image from "next/image";
import usePromptStore from "@/store/PromptStore";

interface ToolCategoriesProps {}

type ImageStyle = {
  id: string;
  name: string;
  imageUrl: string;
  prompt: string;
};

type MusicTrack = {
  id: string;
  name: string;
  audioUrl: string;
  imageUrl: string;
  prompt: string;
};

const ToolCategories: FC<ToolCategoriesProps> = () => {
  const t = useTranslations("home.categories");

  const [selectedTool] = usePromptStore((state) => [state.selectedTool]);

  const [items, setItems] = useState<ImageStyle[] | MusicTrack[]>([]);

  const getImageStyles = async (): Promise<ImageStyle[]> => {
    try {
      const response = await fetch("/data/image-style.json");
      if (!response.ok) throw new Error("File error");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getMusicTrack = async (): Promise<MusicTrack[]> => {
    try {
      const response = await fetch("/data/music-track.json");
      if (!response.ok) throw new Error("File error");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const renderTitle = () => {
    return selectedTool === EToolType.IMAGE ? t("image") : t("music");
  };

  useEffect(() => {
    if (!selectedTool) return;
    const loadData = async () => {
      let items: ImageStyle[] | MusicTrack[] = [];
      if (selectedTool === EToolType.IMAGE) items = await getImageStyles();
      if (selectedTool === EToolType.MUSIC) items = await getMusicTrack();
      setItems(items);
    };
    loadData();
  }, [selectedTool]);

  if (!selectedTool) return <></>;

  return (
    <div className="flex-1">
      <ScrollArea className="pt-5 pb-40">
        <Title className="mb-5 font-light">{renderTitle()}</Title>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <AspectRatio ratio={1 / 1} key={item.id} className="rounded-lg overflow-hidden">
              <Image
                fill
                src={item.imageUrl}
                alt={item.name}
                className="rounded-md cursor-pointer hover:scale-110 transition-[transform_0.4s]"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="w-full min-h-2 bg-background shadow-[0_-50px_30px_40px_oklch(0.145_0_0)] absolute -bottom-1/2 z-2"></div>
              <span className="w-max absolute left-1.5 bottom-1/6 text-xs">{item.name}</span>
            </AspectRatio>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ToolCategories;
