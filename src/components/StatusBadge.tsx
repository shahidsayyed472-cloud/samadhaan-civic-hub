import { cn } from "@/lib/utils";

type Status = "Submitted" | "Verified" | "Assigned" | "In Progress" | "Resolved";

const statusStyles: Record<Status, string> = {
  Submitted: "status-submitted",
  Verified: "status-verified",
  Assigned: "status-assigned",
  "In Progress": "status-in-progress",
  Resolved: "status-resolved",
};

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-semibold", statusStyles[status])}>
      {status}
    </span>
  );
};

export default StatusBadge;
export type { Status };
