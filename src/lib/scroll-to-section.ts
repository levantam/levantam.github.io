export const PORTFOLIO_SECTION_EVENT = "portfolio-section-change";

export function emitPortfolioSectionChange(sectionId: string) {
  window.dispatchEvent(
    new CustomEvent(PORTFOLIO_SECTION_EVENT, { detail: { sectionId } })
  );
}

export function scrollToSectionId(
  id: string,
  event?: { preventDefault(): void }
): boolean {
  event?.preventDefault();
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", `#${id}`);
  emitPortfolioSectionChange(id);
  return true;
}

export function scrollToPageTop(event?: { preventDefault(): void }) {
  event?.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  window.history.replaceState(null, "", "#");
  emitPortfolioSectionChange("home");
}
