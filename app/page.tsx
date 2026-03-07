import DuelConsole from "@/components/sections/DuelConsole";
import { SfxProvider } from "@/components/ui/SfxProvider";
import SoundToggle from "@/components/ui/SoundToggle";

export default function Home() {
  return (
    <SfxProvider>
      <main className="relative overflow-x-hidden bg-[#0b1222] text-slate-100">
        <div className="fixed right-4 top-4 z-50">
          <SoundToggle />
        </div>
        <DuelConsole />
      </main>
    </SfxProvider>
  );
}
