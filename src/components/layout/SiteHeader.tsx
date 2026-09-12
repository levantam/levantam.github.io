import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navigation, profile } from "@/lib/content";
import {
  navActiveIdFromHash,
  scrollSpySectionIds,
} from "@/lib/nav-active-section";
import {
  PORTFOLIO_SECTION_EVENT,
  scrollToPageTop,
  scrollToSectionId,
} from "@/lib/scroll-to-section";
import type { NavigationLink } from "@/types/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const activeNavClasses =
  "text-on-surface font-semibold relative after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary-container";

const inactiveNavClasses =
  "font-label-md text-label-md text-on-surface-variant hover:text-on-surface";

function HeaderNavLink({
  link,
  active,
  className,
  onNavigate,
  onSelect,
}: {
  link: NavigationLink;
  active: boolean;
  className?: string;
  onNavigate?: () => void;
  onSelect?: (linkId: string) => void;
}) {
  const linkClass = cn(
    "transition-colors py-space-xs",
    active ? activeNavClasses : inactiveNavClasses,
    link.external && "inline-flex items-center gap-space-xs group",
    className
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        data-path={link.id}
        onClick={onNavigate}
      >
        <span>{link.label}</span>
        <span className="font-bold transition-colors text-primary-container group-hover:text-primary">
          ↗
        </span>
      </a>
    );
  }

  return (
    <a
      href={link.href}
      className={linkClass}
      data-path={link.id}
      aria-current={active ? "page" : undefined}
      onClick={(event) => {
        if (link.external) {
          onNavigate?.();
          return;
        }
        if (link.href === "#") {
          scrollToPageTop(event);
          onSelect?.("home");
          onNavigate?.();
          return;
        }
        if (link.href.startsWith("#") && link.href.length > 1) {
          const sectionId = link.href.slice(1);
          scrollToSectionId(sectionId, event);
          onSelect?.(link.id);
          onNavigate?.();
        }
      }}
    >
      {link.label}
    </a>
  );
}

function LetsTalkCta({
  className,
  onClick,
  onSelect,
}: {
  className?: string;
  onClick?: () => void;
  onSelect?: () => void;
}) {
  const { cta } = navigation;
  return (
    <a
      href={cta.href}
      className={cn(
        "group relative inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-on-background font-label-md text-label-md text-white transition-all duration-200 hover:bg-primary-container hover:text-on-primary-fixed hover:shadow-[3px_3px_0px_#161c26] shadow-[2px_2px_0px_#161c26]",
        className
      )}
      data-path="contact"
      onClick={(event) => {
        scrollToSectionId("contact", event);
        onSelect?.();
        onClick?.();
      }}
    >
      <span className="text-white group-hover:text-on-primary-fixed">{cta.label}</span>
      <span
        className="material-symbols-outlined text-[18px] text-white transition-colors group-hover:text-on-primary-fixed"
        aria-hidden
      >
        arrow_forward
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [activeId, setActiveId] = useState(() =>
    navActiveIdFromHash(typeof window !== "undefined" ? window.location.hash : "")
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const applySection = (sectionId: string) => {
    setActiveId(navActiveIdFromHash(`#${sectionId}`));
  };

  useEffect(() => {
    const syncHash = () => setActiveId(navActiveIdFromHash(window.location.hash));
    const onSectionChange = (event: Event) => {
      const detail = (event as CustomEvent<{ sectionId: string }>).detail;
      if (detail?.sectionId) {
        applySection(detail.sectionId);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener(PORTFOLIO_SECTION_EVENT, onSectionChange);

    const sectionIds = scrollSpySectionIds();
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer =
      elements.length > 0
        ? new IntersectionObserver(
            (entries) => {
              const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
              const top = visible[0];
              if (top) {
                applySection(top.target.id);
              }
            },
            { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
          )
        : null;

    elements.forEach((el) => observer?.observe(el));

    const onScroll = () => {
      if (window.scrollY < 96) {
        setActiveId("home");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener(PORTFOLIO_SECTION_EVENT, onSectionChange);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const { brand } = navigation;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] font-body-md">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-gutter">
        <a
          href="#"
          className="group flex items-center gap-space-sm"
          data-path="home"
          onClick={(e) => {
            scrollToPageTop(e);
            setActiveId("home");
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm font-bold text-on-primary-fixed shadow-[2px_2px_0px_#161c26] transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[3px_3px_0px_#161c26]">
            {brand.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface">
              {brand.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {brand.title}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-space-lg md:flex" aria-label="Primary">
          {navigation.links.map((link) => (
            <HeaderNavLink
              key={link.id}
              link={link}
              active={activeId === link.id}
              onSelect={setActiveId}
            />
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <LetsTalkCta
            className="hidden sm:inline-flex"
            onSelect={() => setActiveId("")}
          />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-surface-container-lowest font-body-md text-on-surface sm:max-w-xs"
            >
              <SheetHeader>
                <SheetTitle className="font-headline-sm text-headline-sm text-on-surface">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-space-md px-4" aria-label="Mobile">
                {navigation.links.map((link) => (
                  <HeaderNavLink
                    key={link.id}
                    link={link}
                    active={activeId === link.id}
                    className="text-left"
                    onNavigate={closeMenu}
                    onSelect={setActiveId}
                  />
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-space-md p-4">
                <LetsTalkCta
                  className="w-full justify-center"
                  onClick={closeMenu}
                  onSelect={() => setActiveId("")}
                />
                <span className="font-label-md text-label-md text-on-surface-variant">
                  {profile.name}
                </span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
