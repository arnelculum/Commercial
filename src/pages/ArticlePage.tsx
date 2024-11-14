import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug } from '../data/articles';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | CDL Jobs by State</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.tags.join(', ')} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-600 mb-8 gap-4">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        <div className="prose max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => {
            // Check if the paragraph is a list item
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} className="list-disc pl-4 mb-4">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="mb-2">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            // Check if it's a heading
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)[0].length;
              const text = paragraph.replace(/^#+\s/, '');
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
              return <HeadingTag key={index} className="text-2xl font-bold mt-8 mb-4">{text}</HeadingTag>;
            }
            // Regular paragraph
            return <p key={index} className="mb-4">{paragraph}</p>;
          })}
        </div>

        {article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
