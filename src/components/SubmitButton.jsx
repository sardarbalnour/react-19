import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { data, method, action, pending } = useFormStatus();
  console.log({ data, method, action, pending });

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Submiting..." : "Submit"}
      </button>
    </div>
  );
}

export default SubmitButton;
