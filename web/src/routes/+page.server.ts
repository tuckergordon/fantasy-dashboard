import { pythonApiUrl } from '$lib/utils/api-utils';

export async function load({ fetch }) {
  const response = await fetch('api/leagues');

  // TODO: this is only here so that we can test the Python
  // API connection. Once we add actual functionality using
  // the API we should remove this
  const pythonTestResponse = await fetch(pythonApiUrl);
  const pythonTestMsg = await pythonTestResponse.json();

  const leagues = await response.json();
  return { leagues, pythonTestMsg };
}
