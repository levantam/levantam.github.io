import { useState } from "react";
import { motion } from "motion/react";
import { certifications } from "@/lib/content";
import type { Certification } from "@/types/content";
import { useScrollReveal } from "@/lib/scroll-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function formatCertDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="relative mb-space-sm inline-flex items-center bg-surface-container-lowest px-3 py-1 shadow-sm">
      <div className="pointer-events-none absolute inset-0 border border-primary-container" />
      <span className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px] bg-primary-container shadow-[0_0_0_1px_#161c26]" />
      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
        {children}
      </span>
    </div>
  );
}

function CertificationCard({
  item,
  onOpen,
}: {
  item: Certification;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full cursor-pointer rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-space-md text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-on-background hover:shadow-[4px_4px_0px_#161c26] focus:outline-none focus:ring-2 focus:ring-primary-container md:p-space-lg"
    >
      <div className="flex flex-col gap-space-md sm:flex-row sm:items-start">
        <div className="shrink-0 overflow-hidden rounded-lg border border-outline-variant/40 bg-white shadow-sm sm:w-72 md:w-80">
          <img
            src={item.image}
            alt=""
            className="h-auto max-h-52 w-full object-contain object-center p-1 sm:max-h-56"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary">
            {item.title}
          </h3>
          <p className="mt-1 font-body-md text-body-md font-semibold text-on-surface">
            {item.issuer}
          </p>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Issued {formatCertDate(item.issuedDate)}
            {item.credentialId ? ` · ID ${item.credentialId}` : ""}
          </p>
          {item.summary ? (
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              {item.summary}
            </p>
          ) : null}
          <span className="mt-space-md inline-flex items-center gap-1 font-label-sm text-label-sm font-bold text-primary">
            View certificate
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </button>
  );
}

export function CertificationsSection() {
  const { sectionProps } = useScrollReveal();
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = certifications.items.find((c) => c.id === openId) ?? null;

  return (
    <>
      <motion.section
        {...sectionProps}
        id="certifications"
        className="w-full bg-surface-container-lowest py-space-xl"
      >
        <div className="mx-auto max-w-[1240px] px-gutter">
          <SectionEyebrow>{certifications.sectionEyebrow}</SectionEyebrow>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
            {certifications.sectionTitle}
          </h2>
          {certifications.sectionSubtitle ? (
            <p className="mb-space-lg mt-2 max-w-[720px] font-body-md text-body-md text-on-surface-variant">
              {certifications.sectionSubtitle}
            </p>
          ) : (
            <div className="mb-space-lg" />
          )}

          <div className="flex flex-col gap-space-md">
            {certifications.items.map((item) => (
              <CertificationCard
                key={item.id}
                item={item}
                onOpen={() => setOpenId(item.id)}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <Dialog open={openId !== null} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent className="gap-3 p-3 sm:max-w-[min(96vw,80rem)] sm:p-5 max-h-[96vh] w-[96vw] max-w-[96vw] overflow-y-auto border-on-background bg-surface-container-lowest shadow-[8px_8px_0px_#161c26]">
          {selected ? (
            <>
              <DialogHeader className="mb-0 space-y-1 pr-8">
                <DialogTitle className="font-headline-sm text-headline-sm text-left text-on-surface sm:text-headline-md">
                  {selected.title}
                </DialogTitle>
                <p className="text-left font-body-sm text-body-sm text-on-surface-variant">
                  {selected.issuer} · Issued {formatCertDate(selected.issuedDate)}
                  {selected.credentialId ? ` · ${selected.credentialId}` : ""}
                </p>
              </DialogHeader>
              <div className="rounded-lg border border-outline-variant/60 bg-white p-1 sm:p-2">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="mx-auto block h-auto w-full max-h-[min(82vh,900px)] object-contain"
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
