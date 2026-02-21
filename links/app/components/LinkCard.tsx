import { LinkItem } from "@/types/links";

const hoverBorderMap = {
  yellow: "hover:border-brutal-yellow",
  pink: "hover:border-brutal-pink",
  blue: "hover:border-brutal-blue",
} as const;

export default function LinkCard({
  item,
  color,
  index,
}: {
  item: LinkItem;
  color: "yellow" | "pink" | "blue";
  index: number;
}) {
  const rotation = index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border-3 border-brutal-black p-4 shadow-[5px_5px_0_0_#000] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none ${hoverBorderMap[color]} ${rotation}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.emoji && (
            <span className="text-2xl">{item.emoji}</span>
          )}
          <div>
            <div className="font-display text-lg font-bold uppercase">
              {item.title}
            </div>
            {item.description && (
              <div className="font-mono text-sm text-brutal-black/60">
                {item.description}
              </div>
            )}
          </div>
        </div>
        <span className="font-mono text-xl transition-transform duration-150 group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
    </a>
  );
}
