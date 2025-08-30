export interface NavItem {
  path: string;
  label: string;
}

export interface NavigationData {
  brand: string;
  navItems: NavItem[];
  ctaButton: {
    label: string;
    url: string;
    external: boolean;
  };
}

export const navigationData: NavigationData = {
  brand: "tamle.cv",
  navItems: [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' }
  ],
  ctaButton: {
    label: "Let's Talk →",
    url: "https://www.linkedin.com/in/lvtam/",
    external: true
  }
};
