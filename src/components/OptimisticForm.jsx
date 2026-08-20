import { useEffect, useOptimistic, useState } from "react";

import { BASE_URL } from "../constants/constants";

import SubmitButton from "./SubmitButton";

function OptimisticForm() {
  const [data, setData] = useState([]);
  const [optimisticData, setOptimisticData] = useOptimistic(
    data,
    (currentData, optimisticValue) => [optimisticValue, ...currentData]
  );

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const submitAction = (formData) => {
    const form = Object.fromEntries(formData.entries());
    setOptimisticData(form);
    console.log(form);
  };

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
        {optimisticData?.map((post, index) => (
          <div key={index}>
            <span>{post?.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default OptimisticForm;
