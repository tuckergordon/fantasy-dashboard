export async function load({ fetch }) {
  const response = await fetch('api/leagues');

  // const helloResponse = await fetch('https://python-hello-world-nu-lilac.vercel.app/api/');
  // const hello = await helloResponse.text();
  // console.log(hello);

  // fetch('https://python-hello-world-nu-lilac.vercel.app/api/').then(res => {
  //   res.json().then(text => console.log(text));
  // })

  const leagues = await response.json();
  return { leagues };
}
