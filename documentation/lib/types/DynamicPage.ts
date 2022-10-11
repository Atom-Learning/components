import { MDXRemoteSerializeResult } from "next-mdx-remote";

type TTab = {
  title: string;
  content: MDXRemoteSerializeResult;
};

type TLinks = {
  viewSource: any;
  showReportAnIssue: any;
  custom: {
    name: string;
    href: string;
    isExternal: boolean;
  }[];
};

export type TDynamicPage = {
  links: TLinks;
  slug: string;
  tabs: TTab[];
  title: string;
};
