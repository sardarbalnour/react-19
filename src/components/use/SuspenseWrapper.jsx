import { Suspense } from "react";

import { BASE_URL } from "../../constants/constants";

import FetchedPostsList from "./FetchedPostsList";

const fetchPosts = async () => {
  const response = await fetch(BASE_URL + "/posts");
  return response.json();
};

function SuspenseWrapper() {
  const posts = fetchPosts();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchedPostsList fetchedPosts={posts} />
    </Suspense>
  );
}

export default SuspenseWrapper;
