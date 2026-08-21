import { use } from "react";

function FetchedPostsList({ fetchedPosts }) {
  const posts = use(fetchedPosts);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default FetchedPostsList;
