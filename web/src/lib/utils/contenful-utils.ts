// prettier-ignore
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } from '$env/static/private';
import type { ContentfulRecap } from '$lib/models/Contentful.model';
import { error } from '@sveltejs/kit';
import { createClient } from 'contentful';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  // Use the preview access token and host if we're in development so that the unpublished
  // content is visible
  accessToken: import.meta.env.DEV ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
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
