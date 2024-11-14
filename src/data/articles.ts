export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
}

// This will get content from our JSON files
const articleFiles = import.meta.glob('../articles/*.json', { eager: true });

export const getAllArticles = (): Article[] => {
  return Object.entries(articleFiles).map(([path, content]: [string, Article]) => {
    const slug = path.split('/').pop()?.replace('.json', '') || '';
    return {
      ...content,
      slug,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getLatestArticles = (count: number): Article[] => {
  return getAllArticles().slice(0, count);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getAllArticles().find(article => article.slug === slug);
};
