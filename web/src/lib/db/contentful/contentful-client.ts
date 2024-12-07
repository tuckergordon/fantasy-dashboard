import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
} from '$env/static/private';
import { createClient } from 'contentful';

export const contentful = createClient({
  space: CONTENTFUL_SPACE_ID,
  // Use the preview access token and host if we're in development so that the unpublished
  // content is visible
  accessToken: import.meta.env.DEV ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
