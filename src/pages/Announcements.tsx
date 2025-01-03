import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { announcements } from '@/data/mockData';
import { format } from 'date-fns';

export function Announcements() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Announcements & Events</h1>
        <p className="text-muted-foreground">Stay updated with the latest community news and upcoming events.</p>
      </div>

      <div className="grid gap-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{announcement.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(announcement.date), 'MMMM d, yyyy')}
                  </p>
                </div>
                <Badge variant={announcement.category === 'event' ? 'default' : 'secondary'}>
                  {announcement.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}