import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamSpotlight } from '@/lib/data';
import { Star, Cake, PartyPopper } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

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
        <p className="text-sm text-primary text-white">{teamSpotlight.role}</p>

        <div className="flex flex-wrap justify-center gap-2 my-3">
            {teamSpotlight.birthday && (
                <Badge variant="secondary" className="flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800/60">
                    <Cake className="h-4 w-4" />
                    <span>{teamSpotlight.birthday}</span>
                </Badge>
            )}
            {teamSpotlight.workAnniversary && (
                <Badge variant="secondary" className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800/60">
                    <PartyPopper className="h-4 w-4" />
                    <span>{teamSpotlight.workAnniversary}</span>
                </Badge>
            )}
        </div>
        
        <p className="text-sm text-muted-foreground mt-2 italic px-4">
          {teamSpotlight.funFact}
        </p>
      </CardContent>
    </Card>
  );
}
