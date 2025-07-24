import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { news } from '@/lib/data';
import { Newspaper } from 'lucide-react';

export function CompanyNews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Company News
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {news.map((article) => (
          <div key={article.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 group">
            <div className="overflow-hidden rounded-lg md:col-span-1">
              <Image
                alt={article.title}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                height="225"
                src={article.image}
                data-ai-hint="office work"
                width="400"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
              <div className="text-xs text-muted-foreground mt-2">
                <span>{article.author}</span> &middot; <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
