const URLbase = "http://localhost:3000";

export async function getPostsByUserId(id) {
  let response = await fetch(`${URLbase}/posts?userId=${id}`);
  const data = response.json();
  return data;
}
