import { useActionState } from "react";

function ActionStateForm() {
  const createPost = (previousState, formData) => {
    const form = Object.fromEntries(formData.entries());
    console.log({ previousState, form });
  };

  const [state, submitAction, isPending] = useActionState(createPost, null);

  return (
    <div>
      <form action={submitAction}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="body" placeholder="body" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ActionStateForm;
