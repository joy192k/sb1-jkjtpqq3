import { ArcRequestForm } from '@/components/arc/ArcRequestForm';
import { ArcGuidelines } from '@/components/arc/ArcGuidelines';

export function ARC() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Submit ARC Request</h1>
        <p className="text-muted-foreground">
          Submit your architectural or landscaping changes for review by the Architectural Review Committee.
        </p>
      </div>

      <ArcGuidelines />

      <div className="bg-card p-6 rounded-lg border shadow-card">
        <ArcRequestForm />
      </div>
    </div>
  );
}