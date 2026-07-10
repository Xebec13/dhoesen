export interface WorkItem {
  title: string;
}

export interface WorksData {
  title: string;
  items: WorkItem[];
}

export const worksData: WorksData = {
  title: "prace",
  items: [
    { title: "Projekt" },
    { title: "Projekt" },
    { title: "Projekt" },
  ],
};
