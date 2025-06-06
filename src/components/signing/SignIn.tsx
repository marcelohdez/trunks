import { signIn } from "@/lib/auth";
import { Button } from "../Button";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Sign In with GitHub</Button>
    </form>
  );
};

export { SignIn };
