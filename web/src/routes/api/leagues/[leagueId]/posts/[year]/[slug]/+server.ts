import type { ContentfulRecap } from '$lib/models/Contentful.model.js';
import { documentToHtmlString, type RenderNode } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { error, json } from '@sveltejs/kit';
import { createClient } from 'contentful';

async function getPost(leagueId: string, slug: string) {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN,
  });

  let data = await client
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

export async function GET({ params }) {
  const post = await getPost(params.leagueId, params.slug);

  const createdAt = new Date(post.sys.createdAt);
  const updatedAt = new Date(post.sys.updatedAt);
  let { body, ...meta } = post.fields;

  const rawContent = post.fields.body;

  const renderNode: RenderNode = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, description } = node.data.target.fields;
      return `<img src="${file.url}" height="${file.details.image.height}" width="${file.details.image.width}" alt="${description}"/>`;
    },
  };

  const options = {
    renderNode,
  };

  const content = await documentToHtmlString(rawContent, options);
  return json({ ...meta, content, createdAt, updatedAt });
}
