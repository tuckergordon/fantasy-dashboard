import type { ContentfulRecap } from '$lib/db/contentful/models/Contentful.model';
import { contentful } from './contentful-client';
import { error } from '@sveltejs/kit';

export async function getPost(leagueId: string, slug: string) {
  const data = await contentful
    .getEntries<ContentfulRecap>({
      content_type: 'recap',
      'fields.leagueId': leagueId,
      'fields.slug': slug,
    })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog post: ' + slug);
    });

  return data.items[0];
}

export async function getAllPosts(leagueId: string) {
  const data = await contentful
    .getEntries({ content_type: 'recap', 'fields.leagueId': leagueId })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog posts');
    });

  return data.items;
}
