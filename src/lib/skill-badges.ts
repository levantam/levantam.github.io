export type SkillBadgeStyle = {
  pillClass: string;
  /** Full URL to SVG/PNG; prefer devicon for reliability */
  iconUrl?: string;
};

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const DEFAULT: SkillBadgeStyle = {
  pillClass: "bg-surface-container-high text-on-surface",
};

export const SKILL_BADGE_STYLES: Record<string, SkillBadgeStyle> = {
  ".NET": {
    pillClass: "bg-sky-100 text-sky-950",
    iconUrl: `${DEVICON}/dot-net/dot-net-original.svg`,
  },
  "C#": {
    pillClass: "bg-violet-100 text-violet-950",
    iconUrl: `${DEVICON}/csharp/csharp-plain.svg`,
  },
  Golang: {
    pillClass: "bg-cyan-100 text-cyan-950",
    iconUrl: `${DEVICON}/go/go-original-wordmark.svg`,
  },
  "ABP Framework": {
    pillClass: "bg-teal-100 text-teal-950",
  },
  "MS SQL": {
    pillClass: "bg-blue-100 text-blue-950",
    iconUrl: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
  },
  MySQL: {
    pillClass: "bg-sky-100 text-sky-950",
    iconUrl: `${DEVICON}/mysql/mysql-original.svg`,
  },
  Azure: {
    pillClass: "bg-sky-100 text-sky-950",
    iconUrl: `${DEVICON}/azure/azure-original.svg`,
  },
  AWS: {
    pillClass: "bg-orange-100 text-orange-950",
    iconUrl: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
  },
  GCP: {
    pillClass: "bg-blue-100 text-blue-950",
    iconUrl: `${DEVICON}/googlecloud/googlecloud-original.svg`,
  },
  "React.js": {
    pillClass: "bg-cyan-100 text-cyan-950",
    iconUrl: `${DEVICON}/react/react-original.svg`,
  },
  Angular: {
    pillClass: "bg-rose-100 text-rose-950",
    iconUrl: `${DEVICON}/angular/angular-original.svg`,
  },
  "Next.js": {
    pillClass: "bg-neutral-200 text-neutral-900",
    iconUrl: `${DEVICON}/nextjs/nextjs-original.svg`,
  },
  TypeScript: {
    pillClass: "bg-blue-100 text-blue-950",
    iconUrl: `${DEVICON}/typescript/typescript-original.svg`,
  },
  Microservices: {
    pillClass: "bg-indigo-100 text-indigo-950",
    iconUrl: `${DEVICON}/docker/docker-original.svg`,
  },
  Serverless: {
    pillClass: "bg-purple-100 text-purple-950",
    iconUrl: "https://cdn.simpleicons.org/serverless/FD5750",
  },
  "Cloud Architecture": {
    pillClass: "bg-emerald-100 text-emerald-950",
    iconUrl: `${DEVICON}/kubernetes/kubernetes-plain.svg`,
  },
};

export function getSkillBadgeStyle(name: string): SkillBadgeStyle {
  return SKILL_BADGE_STYLES[name] ?? DEFAULT;
}
