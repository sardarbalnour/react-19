import { use } from "react";
import { DataContext } from "../../context/DataProvider";

function FetchedPostsList({ fetchedPosts }) {
  const posts = use(fetchedPosts);
  console.log(posts);

  const data = use(DataContext);
  console.log(data);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default FetchedPostsList;
