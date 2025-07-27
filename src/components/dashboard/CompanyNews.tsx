
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { news } from '@/lib/data';
import { Newspaper, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function CompanyNews() {
  const [likes, setLikes] = useState({ n1: 12, n2: 8 });

  const handleLike = (id: 'n1' | 'n2') => {
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Company News
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {news.map((article) => (
          <div key={article.id} className="flex flex-col md:flex-row gap-6 group">
            <div className="overflow-hidden rounded-lg md:w-1/3 flex-shrink-0">
              <Image
                alt={article.title}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                height="225"
                src={article.image}
                data-ai-hint={article.id === 'n1' ? 'award ceremony' : 'data analytics'}
                width="400"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
                <div className="text-xs text-muted-foreground mt-2">
                  <span>{article.author}</span> &middot; <span>{article.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Button variant="ghost" size="sm" onClick={() => handleLike(article.id as 'n1' | 'n2')} className="flex items-center gap-1.5 text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{likes[article.id as 'n1' | 'n2']}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
