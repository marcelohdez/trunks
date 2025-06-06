import { auth } from "@/lib/auth";
import { SignIn } from "./signing/SignIn";
import { SignOut } from "./signing/SignOut";

export default async function NavBar() {
  const session = await auth();

  const signInOrOut = () => {
    if (session?.user?.name) {
      return <SignOut name={session.user.name} />;
    } else {
      return <SignIn />;
    }
  };

  return (
    <div className="top-0 sticky backdrop-blur-md border-b-1 border-trunks-500/50 z-50">
      <div className="flex max-w-5xl mx-auto py-2 px-4 justify-between">
        <h2 className="font-bold font-serif text-2xl">trunks</h2>
        {signInOrOut()}
      </div>
    </div>
  );
}
