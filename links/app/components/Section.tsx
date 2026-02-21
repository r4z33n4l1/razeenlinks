import { LinkSection } from "@/types/links";
import LinkCard from "./LinkCard";

const colorMap = {
  yellow: "bg-brutal-yellow",
  pink: "bg-brutal-pink",
  blue: "bg-brutal-blue",
} as const;

const textColorMap = {
  yellow: "text-brutal-black",
  pink: "text-white",
  blue: "text-white",
} as const;

export default function Section({ section }: { section: LinkSection }) {
  if (section.items.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`${colorMap[section.color]} ${textColorMap[section.color]} inline-block border-3 border-brutal-black px-4 py-1 font-display text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#000] -rotate-1`}
        >
          {section.title}
        </div>
        <div className="flex-1 h-[3px] bg-brutal-black" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {section.items.map((item, i) => (
          <LinkCard key={item.title} item={item} color={section.color} index={i} />
        ))}
      </div>
    </div>
  );
}
