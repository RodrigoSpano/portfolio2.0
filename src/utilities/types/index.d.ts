export interface LinksProps {
  text: string;
  path: string;
}

export interface SKillsBase {
  name: string;
  path: string;
}

export interface ProjectBase {
  title: string;
  githubUrl: string;
  deploy?: string;
  description: string;
  tech: string[];
}

export interface EducationBase {
  title: string;
  period: number[] | number;
  certificate: string;
}
