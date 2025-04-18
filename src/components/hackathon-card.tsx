import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  placement?: number | string;
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  placement,
}: Props) {
  const getPlacementColor = (placement: number | string) => {
    if (typeof placement === "number") {
      switch (placement) {
        case 1:
          return "bg-yellow-400";
        case 2:
          return "bg-gray-500";
        case 3:
          return "bg-amber-600";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto bg-muted">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
        {placement !== undefined && placement !== "" && (
          <Badge className={`${getPlacementColor(placement)} px-2 py-1 text-[10px]`}>
            {typeof placement === "number"
              ? placement === 1
                ? "First Place"
                : placement === 2
                ? "Second Place"
                : placement === 3
                ? "Third Place"
                : `Placement: ${placement}`
              : placement}
          </Badge>
        )}
        {links && links.length > 0 && (
          <>
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge key={idx} title={link.title} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </>
        )}
      </div>
    </li>
  );
}
