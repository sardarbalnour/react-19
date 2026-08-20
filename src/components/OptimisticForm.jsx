import { startTransition, useEffect, useOptimistic, useState } from "react";

import { BASE_URL } from "../constants/constants";

import SubmitButton from "./SubmitButton";

function OptimisticForm() {
  const [data, setData] = useState([]);
  const [optimisticData, setOptimisticData] = useOptimistic(
    data,
    (currentData, optimisticValue) => [
      { ...optimisticValue, isPending: true },
      ...currentData,
    ]
  );

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const submitAction = async (formData) => {
    const form = Object.fromEntries(formData.entries());
    setOptimisticData(form);
    console.log(form);

    // fetch
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed : ${response.status}`);
      }

      const data = await response.json();
      // setData((previousData) => [data, ...previousData]);
      startTransition(() => {
        setData((previousData) => [data, ...previousData]);
      });
    } catch (err) {
      console.log(err.message);
    }
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
            {post?.isPending && (
              <span style={{ color: "red" }}>Loading...</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default OptimisticForm;
