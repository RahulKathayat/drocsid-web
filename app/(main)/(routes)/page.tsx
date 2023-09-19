import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-3">
      This is a protected route
      <UserButton afterSignOutUrl="/" />
      <ModeToggle/>
    </div>
  )
}
