import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { REQUEST_TYPES } from '@/lib/arc-utils';
import { RequestType } from '@/types/arc';

interface RequestTypeSelectProps {
  value: RequestType;
  onChange: (value: RequestType) => void;
  otherDetails?: string;
  onOtherDetailsChange?: (value: string) => void;
}

export function RequestTypeSelect({
  value,
  onChange,
  otherDetails,
  onOtherDetailsChange,
}: RequestTypeSelectProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="requestType">Type of Request</Label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select request type" />
          </SelectTrigger>
          <SelectContent>
            {REQUEST_TYPES.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          {REQUEST_TYPES.find(t => t.id === value)?.description}
        </p>
      </div>

      {value === 'other' && onOtherDetailsChange && (
        <div className="space-y-2">
          <Label htmlFor="otherDetails">Please specify</Label>
          <Input
            id="otherDetails"
            value={otherDetails}
            onChange={(e) => onOtherDetailsChange(e.target.value)}
            placeholder="Describe the type of request"
          />
        </div>
      )}
    </div>
  );
}