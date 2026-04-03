import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Submitted", "Verified", "Assigned", "Work in Progress", "Resolved"];

const StatusTimeline = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-center">
          <div className="flex flex-col items-center gap-1">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all",
                i < currentStep
                  ? "border-accent bg-accent text-accent-foreground"
                  : i === currentStep
                  ? "border-saffron bg-saffron text-primary-foreground"
                  : "border-border bg-muted text-muted-foreground"
              )}
            >
              {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className="text-center text-[10px] leading-tight text-muted-foreground md:text-xs">
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "mx-1 h-0.5 flex-1",
                i < currentStep ? "bg-accent" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StatusTimeline;
