import {Spinner} from "@heroui/react";

export function SpinnerBasic() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-[-10px] bg-[#1EB2A6]/20 rounded-full blur-xl animate-pulse" />
          <Spinner 
            size="lg" 
            color="primary"
            classNames={{
              circle1: "border-b-[#1EB2A6]",
              circle2: "border-b-[#1EB2A6]"
            }}
          />
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1EB2A6]">
            Sipekerja NTT
          </span>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#1EB2A6] animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-[#1EB2A6] animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 rounded-full bg-[#1EB2A6] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
