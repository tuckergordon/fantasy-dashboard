import { getPost } from '$lib/utils/contenful-utils';
import { documentToHtmlString, type RenderNode } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
  const post = await getPost(params.leagueId, params.slug);

  const postId = post.sys.id;
  const createdAt = new Date(post.sys.createdAt);
  const updatedAt = new Date(post.sys.updatedAt);
  const { body, ...meta } = post.fields;

  let image = '';
  const renderNode: RenderNode = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, description } = node.data.target.fields;
      // Save the URL of the first image so that we can use it as the preview
      // image for the post (e.g. what shows up when you text a link to the post)
      if (!image) {
        image = file.url;
      }
      return `<img src="https:${file.url}" height="${file.details.image.height}" width="${file.details.image.width}" alt="${description}"/>`;
    },
  };

  const options = {
    renderNode,
  };

  const content = documentToHtmlString(body, options);
  return json({ ...meta, content, createdAt, updatedAt, postId, image });
}
