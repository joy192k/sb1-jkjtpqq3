import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Home as HomeIcon, FileText, Calendar } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      <section className="py-16 px-4 bg-accent text-accent-foreground rounded-lg">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to SmartHOA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A vibrant community dedicated to maintaining the highest standards
            of living while fostering a welcoming environment for all residents.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="font-semibold">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HomeIcon className="h-5 w-5 text-primary" />
              Quick Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-primary"
            >
              Pay HOA Dues
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-primary"
            >
              Submit ARC Request
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-primary"
            >
              View Calendar
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Latest Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Pool opening May 1st
            </p>
            <p className="text-sm text-muted-foreground">
              New landscaping schedule
            </p>
            <p className="text-sm text-muted-foreground">
              Board meeting next week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search HOA documents..."
                className="w-full pl-9 pr-4 py-2 rounded-md border border-input bg-background hover:border-ring focus:border-ring focus:ring-1 focus:ring-ring"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
