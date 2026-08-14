import { useActionState } from "react";

import { BASE_URL } from "../constants/constants";

function ActionStateForm() {
  const createPost = async (previousState, formData) => {
    // console.log(previousState);
    const form = Object.fromEntries(formData.entries());
    // console.log({ previousState, form });

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
      return { data, error: null };
    } catch (err) {
      return { ...previousState, error: err.message };
    }
  };

  const [state, submitAction, isPending] = useActionState(createPost, null);

  return (
    <div>
      <form action={submitAction}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="body" placeholder="body" />

        <button type="submit" disabled={isPending}>
          {isPending ? "Submiting..." : "Submit"}
        </button>
      </form>

      {!!state?.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}

      {!!state?.error && <pre>{state.error}</pre>}
    </div>
  );
}

export default ActionStateForm;
