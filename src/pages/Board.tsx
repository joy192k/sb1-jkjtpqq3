import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { boardMembers } from '@/data/mockData';

export function Board() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Board Members</h1>
        <p className="text-muted-foreground">
          Meet the dedicated individuals who serve our community.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {boardMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle>{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}