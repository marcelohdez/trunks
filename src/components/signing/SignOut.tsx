import { signOut } from "@/auth";
import { Button } from "../Button";

const SignOut = (props: { name: string }) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign out {props.name}</Button>
    </form>
  );
};

export { SignOut };
