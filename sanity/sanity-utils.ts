import { Info } from '@/types/Info';
import { createClient, groq } from 'next-sanity';

export async function getInfo(): Promise<Info[]> {
  const client = createClient({
    projectId: '0a49l8db',
    dataset: 'production',
    apiVersion: '2023-12-27',
  });

  return client.fetch(
    groq`*[_type == "info"]{
      _id,
      _createdAt,
      name,
      "alt": image.alt,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
      }`
  );
}
