import { Card, CardContent } from '@/components/ui/card';
import { FileText, AlertCircle } from 'lucide-react';

export function ArcGuidelines() {
  return (
    <Card className="bg-accent">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <FileText className="h-6 w-6 text-primary flex-shrink-0" />
          <div className="space-y-4">
            <h3 className="font-semibold">Guidelines & Requirements</h3>
            <ul className="space-y-2 text-sm">
              <li>• Review HOA covenants before submitting</li>
              <li>• Include detailed project description</li>
              <li>• Attach relevant documents (plans, photos)</li>
              <li>• Allow 5-7 business days for review</li>
              <li>• Wait for approval before starting work</li>
            </ul>
            <div className="flex items-center space-x-2 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>Need help? Contact the ARC committee at arc@harmonyhoa.com</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}