export async function load({ fetch }) {
  const response = await fetch('api/leagues');

  const helloResponse = await fetch('https://fantasy-dashboard-api.vercel.app/api/');
  const hello = await helloResponse.json();
  console.log('FROM PYTHON', hello);

  const leagues = await response.json();
  return { leagues, hello };
}
