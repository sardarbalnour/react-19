import { useEffect, useState } from "react";

import { BASE_URL } from "../constants/constants";

import SubmitButton from "./SubmitButton";

function OptimisticForm() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const submitAction = () => {};

  return (
    <>
      OptimisticForm
      <div>
        <form action={submitAction}>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="body" placeholder="body" />
          <SubmitButton />
        </form>
      </div>
      <div>
        {data?.map((post) => (
          <div key={post?.id}>
            <span>{post?.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default OptimisticForm;
