export interface ITravelMenu {
  label: string;
  url?: string;
  submenu?: {
    label: string;
    url: string;
  }[];
}
