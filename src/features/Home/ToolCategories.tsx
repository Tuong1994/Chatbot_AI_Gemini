import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Title } from "@/components/ui/typography";
import Image from "next/image";
import { FC } from "react";

interface ToolCategoriesProps {}

const ToolCategories: FC<ToolCategoriesProps> = () => {
  const items = [
    {
      id: "3QiRUyR8aRLzHJL",
      name: "Monochrome",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/monochrome_2.webp",
      prompt_suffix:
        ", high-contrast black and white photography, film noir aesthetic, detailed shadows and highlights, greyscale, cinematic art",
    },
    {
      id: "JFGP2TsEUZQ5euB",
      name: "Color block",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/color_block.webp",
      prompt_suffix:
        ", modern color block art style, bold geometric shapes, flat large color fields, minimalist, vibrant distinct contrasting colors",
    },
    {
      id: "NSGzEHrm24rH9vu",
      name: "Runway",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/runway.webp",
      prompt_suffix:
        ", high-fashion runway photography, avant-garde style, model walking, dramatic fashion show lighting, designer clothing, sharp focus, magazine quality",
    },
    {
      id: "3WW889fmSU7g5KU",
      name: "Risograph",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/risograph.webp",
      prompt_suffix:
        ", risograph print style, grainy texture, layered colors, limited palette art, retro illustration, halftone dots, textured paper",
    },
    {
      id: "8KzBNb3WESKpndP",
      name: "Technicolor",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/technicolor.webp",
      prompt_suffix:
        ", vintage technicolor movie style, 1950s cinema, ultra-saturated and vibrant colors, glamorous Hollywood lighting, classic film grain, nostalgic feeling",
    },
    {
      id: "7quZm76F8bhGByC",
      name: "Gothic clay",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/gothic_clay_2.webp",
      prompt_suffix:
        ", handcrafted claymation style, gothic atmosphere, stop-motion animation aesthetic, handmade texture, dark whimsy, Tim Burton inspired, tactile art",
    },
    {
      id: "6CvH38cseAqkEZU",
      name: "Dynamite",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/dynamite_2.webp",
      prompt_suffix:
        ", explosive and dynamic composition, high energy, dramatic sparks and light, intense colors, motion blur, powerful action shot, cinematic lighting",
    },
    {
      id: "3id8GvEZZFzyLYk",
      name: "Salon",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/salon_2.webp",
      prompt_suffix:
        ", elegant portrait, classical lighting, sophisticated setting, soft background blur, professional photography, high-end fashion magazine style",
    },
    {
      id: "BvBRWA393cEvyuX",
      name: "Sketch",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/sketch.webp",
      prompt_suffix:
        ", hand-drawn pencil sketch, black and white line art, detailed cross-hatching, graphite texture, artist's sketchbook style, raw illustration",
    },
    {
      id: "7ELgH43wp4ydjwa",
      name: "Cinematic",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/cinematic.webp",
      prompt_suffix:
        ", cinematic film still, epic movie lighting, dramatic composition, film grain, wide-angle lens, professional depth of field, high detailed realism",
    },
    {
      id: "34uPP2FfPSop5Zc",
      name: "Steampunk",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/steampunk.webp",
      prompt_suffix:
        ", steampunk aesthetic, victorian industrial style, brass and copper gears, steam machinery, intricate clockwork, sepia tones, atmospheric lighting",
    },
    {
      id: "385UeE7sHpEK466",
      name: "Sunrise",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/sunrise.webp",
      prompt_suffix:
        ", warm sunrise lighting, golden hour, soft light, peaceful atmosphere, vibrant orange and pink hues, beautiful morning view",
    },
    {
      id: "C4SnyPaQGnYvPfu",
      name: "Mythic fighter",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/mythic_fighter.webp",
      prompt_suffix:
        ", epic fantasy character design, mythic warrior, intricate armor, heroic pose, dramatic battle lighting, detailed magic effects, cinematic fantasy art",
    },
    {
      id: "43ZYTeVYDRnM7R8",
      name: "Surreal",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/surreal_2.webp",
      prompt_suffix:
        ", surreal dreamlike composition, imaginative fantasy world, bizarre elements, vibrant and unusual colors, high detailed art, mind-bending scenery",
    },
    {
      id: "6CyKtNyajteMCmQ",
      name: "Moody",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/moody.webp",
      prompt_suffix:
        ", moody and dark atmosphere, dramatic lighting, deep shadows, low key photography, emotional depth, dark colors, cinematic mystery",
    },
    {
      id: "3xtJfLGwGsDV7TE",
      name: "Enamel pin",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/enamel_pin.webp",
      prompt_suffix:
        ", enamel pin design, flat vector art, bold black outlines, glossy finish, gold metallic edges, simple geometric shapes, clean illustration",
    },
    {
      id: "6KoSQDRgNeqRvYf",
      name: "Cyborg",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/cyborg.webp",
      prompt_suffix:
        ", cyborg aesthetic, cybernetic enhancements, futuristic high-tech machinery, glowing neon circuits, metallic skin textures, detailed robotics",
    },
    {
      id: "95fpeeTSQYb4ATK",
      name: "Soft portrait",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/depth_of_field.webp",
      prompt_suffix:
        ", soft and beautiful portrait photography, shallow depth of field, creamy background blur, natural light, diffused focus, gentle mood, elegant",
    },
    {
      id: "BWjUpWgcxGRJZWa",
      name: "Old cartoon",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/old_cartoon.webp",
      prompt_suffix:
        ", 1930s rubber hose animation style, vintage cartoon, black and white, grainy film texture, cuphead aesthetic, classic animation",
    },
    {
      id: "97EFjXfPJRDp9SY",
      name: "Oil painting",
      thumbnail_url:
        "https://www.gstatic.com/bard-robin-zs/media_gen_templates/image_templates/rect/oil_painting.webp",
      prompt_suffix:
        ", classic oil painting, thick brushstrokes, impasto technique, visible canvas texture, Rembrandt lighting style, rich traditional colors",
    },
  ];

  return (
    <ScrollArea className="pt-5 pb-40">
      <Title className="mb-5 font-light">Pick a style for your image</Title>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <AspectRatio ratio={1 / 1} key={item.id}>
            <Image fill src={item.thumbnail_url} alt={item.name} className="rounded-md" />
          </AspectRatio>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ToolCategories;
