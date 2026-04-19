export type NavigationItem = {
    label : string;
    href : string;
}

export type Project = {
    id: string;
    name: string;
    description: string;
    image: string;
    subImages?: string[];
    stack: string[];
    features: string[];
    github: string;
}