import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <h2 className="font-bold font-serif text-2xl">Hello, trunks.dev!</h2>
      <div>I am some regular text</div>
      <div className="bg-trunks-100 dark:bg-trunks-800">
        I am some highlighted text
      </div>
      <div className="m-2">
        <Button>I am but a button</Button>
      </div>
    </div>
  );
}
