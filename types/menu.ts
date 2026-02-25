export interface HeaderItem {
    label: string;
    href: string;
    isButton?: boolean;
    isSignUp?: boolean;
    children?: HeaderItem[];
}

export interface MenuItem {
    title: string;
    path: string;
    icon?: string;
    children?: MenuItem[];
}