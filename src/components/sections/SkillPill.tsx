import { getSkillBadgeStyle } from "@/lib/skill-badges";

export function SkillPill({ name }: { name: string }) {
  const style = getSkillBadgeStyle(name);

  return (
    <span
      className={`inline-flex cursor-default items-center gap-1.5 rounded-full px-2.5 py-1 font-label-sm text-label-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-[2px_2px_0px_#161c26] ${style.pillClass}`}
    >
      {style.iconUrl ? (
        <img
          src={style.iconUrl}
          alt=""
          className="h-4 w-4 shrink-0 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/60 text-[9px] font-bold">
          {name.charAt(0)}
        </span>
      )}
      {name}
    </span>
  );
}
