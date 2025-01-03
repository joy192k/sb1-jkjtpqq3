import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText } from 'lucide-react';
import { getRequestTypeInfo } from '@/lib/arc-utils';
import { RequestType } from '@/types/arc';

interface DocumentRequirementsProps {
  requestType: RequestType;
  suggestions?: string[];
}

export function DocumentRequirements({ requestType, suggestions }: DocumentRequirementsProps) {
  const typeInfo = getRequestTypeInfo(requestType);

  return (
    <div className="space-y-4">
      <Alert>
        <FileText className="h-4 w-4" />
        <AlertDescription>
          <div className="mt-2 space-y-2">
            <p className="font-medium">Required Documents:</p>
            <ul className="list-disc pl-5 space-y-1">
              {typeInfo.requiredDocs.map((doc, index) => (
                <li key={index} className="text-sm">{doc}</li>
              ))}
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      {suggestions && suggestions.length > 0 && (
        <Alert className="bg-accent border-primary/20">
          <AlertDescription>
            <div className="space-y-2">
              <p className="font-medium">AI Suggestions:</p>
              <ul className="list-disc pl-5 space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm">{suggestion}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}