export interface SubLink {
    name: string;
    path: string;
  }
  
  export interface NavItem {
    name: string;
    path: string;
    subLinks: SubLink[];
  }