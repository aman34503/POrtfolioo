/**
 * Blog API - Hashnode fetch with local JSON fallback
 * Set HASHNODE_HOST in env or pass to fetchPosts(host)
 */
const HASHNODE_HOST = "aman04.hashnode.dev";

const HASHNODE_QUERY = `
  query PostsByPublication($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            url
            brief
            publishedAt
            author { name }
          }
        }
      }
    }
  }
`;

export async function fetchHashnodePosts(host = HASHNODE_HOST, first = 12) {
  try {
    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: HASHNODE_QUERY,
        variables: { host, first },
      }),
    });
    const json = await res.json();
    const edges = json?.data?.publication?.posts?.edges ?? [];
    return edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      link: node.url,
      time: node.publishedAt
        ? new Date(node.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "",
      location: node.author?.name || "Hashnode",
      brief: node.brief,
    }));
  } catch (e) {
    return [];
  }
}
