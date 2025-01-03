import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Upload } from 'lucide-react';
import { RequestTypeSelect } from './RequestTypeSelect';
import { DocumentRequirements } from './DocumentRequirements';
import { generateAiSuggestions } from '@/lib/arc-utils';
import { ArcFormData, RequestType } from '@/types/arc';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  address: z.string().min(5, 'Property address is required'),
  requestType: z.string(),
  otherTypeDetails: z.string().optional(),
  projectTitle: z.string().min(3, 'Project title is required'),
  description: z.string().min(20, 'Please provide more detail about your project'),
  startDate: z.date(),
  endDate: z.date(),
});

export function ArcRequestForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const form = useForm<ArcFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      requestType: 'exterior-paint',
      projectTitle: '',
      description: '',
    },
  });

  const requestType = form.watch('requestType') as RequestType;

  useEffect(() => {
    if (files.length > 0) {
      const newSuggestions = generateAiSuggestions(files, requestType);
      setSuggestions(newSuggestions);
    }
  }, [files, requestType]);

  const onSubmit = async (data: ArcFormData) => {
    // TODO: Implement form submission
    console.log('Form data:', data);
    console.log('Files:', files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Resident Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            {...form.register('name')}
            placeholder="Enter your full name"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            placeholder="your.email@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            {...form.register('phone')}
            placeholder="(555) 123-4567"
          />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Property Address</Label>
          <Input
            id="address"
            {...form.register('address')}
            placeholder="Enter your property address"
          />
          {form.formState.errors.address && (
            <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>
          )}
        </div>
      </div>

      {/* Request Type Selection */}
      <RequestTypeSelect
        value={requestType}
        onChange={(value) => form.setValue('requestType', value)}
        otherDetails={form.watch('otherTypeDetails')}
        onOtherDetailsChange={(value) => form.setValue('otherTypeDetails', value)}
      />

      {/* Project Details */}
      <div className="space-y-2">
        <Label htmlFor="projectTitle">Project Title</Label>
        <Input
          id="projectTitle"
          {...form.register('projectTitle')}
          placeholder="e.g., Fence Installation, Exterior Paint"
        />
        {form.formState.errors.projectTitle && (
          <p className="text-sm text-destructive">{form.formState.errors.projectTitle.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          {...form.register('description')}
          placeholder="Describe your proposed changes in detail..."
          className="min-h-[120px]"
        />
        {form.formState.errors.description && (
          <p className="text-sm text-destructive">{form.formState.errors.description.message}</p>
        )}
      </div>

      {/* Project Dates */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Estimated Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !startDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Estimated End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !endDate && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Document Requirements and Upload */}
      <DocumentRequirements requestType={requestType} suggestions={suggestions} />

      <div className="space-y-2">
        <Label htmlFor="files">Upload Documents</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
          <Input
            id="files"
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <Label htmlFor="files" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag and drop files here, or click to select files
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              (Max file size: 10MB. Accepted formats: PDF, JPG, PNG)
            </p>
          </Label>
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="text-sm text-left">
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Agreement and Submit */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="agreement"
            className="rounded border-input"
            required
          />
          <Label htmlFor="agreement" className="text-sm">
            I certify that all information provided is accurate and true
          </Label>
        </div>

        <Button type="submit" className="w-full">Submit Request</Button>
      </div>
    </form>
  );
}