import { PortableTextBlock } from 'sanity';

export type Info = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
