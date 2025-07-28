import { HamburguerMenu } from "./HamburguerMenu";

export function MainComponent() {
  return (
    <div className="relative flex min-h-screen  w-full overflow-x-hidden flex-col items-start justify-start bg-[#000000] text-stone-200 px-5 py-3">
      <HamburguerMenu />
    </div>
  );
}
