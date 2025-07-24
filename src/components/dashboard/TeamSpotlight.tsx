import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamSpotlight } from '@/lib/data';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function TeamSpotlight() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          Team Spotlight
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={teamSpotlight.photo} alt={teamSpotlight.name} data-ai-hint="employee portrait" />
          <AvatarFallback>{teamSpotlight.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold">{teamSpotlight.name}</h3>
        <p className="text-sm text-primary">{teamSpotlight.role}</p>
        <p className="text-sm text-muted-foreground mt-2 italic">
          {teamSpotlight.funFact}
        </p>
      </CardContent>
    </Card>
  );
}
