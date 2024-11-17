import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private';
import type { ContentfulRecap } from '$lib/models/Contentful.model';
import { error } from '@sveltejs/kit';
import { createClient } from 'contentful';

console.log('Creating Contentful client');
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function getPost(leagueId: string, slug: string) {
  const data = await client
    .getEntries<ContentfulRecap>({
      content_type: 'recap',
      'fields.leagueId': leagueId,
      'fields.slug': slug,
    })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog posts');
    });

  return data.items[0];
}

export async function getAllPosts(leagueId: string) {
  const data = await client
    .getEntries({ content_type: 'recap', 'fields.leagueId': leagueId })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog posts');
    });

  return data.items;
}
