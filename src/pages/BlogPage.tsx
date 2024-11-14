import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getAllArticles } from '../data/articles';

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <Helmet>
        <title>Trucking News & Resources | CDL Jobs by State</title>
        <meta 
          name="description" 
          content="Stay informed with the latest trucking industry news, career advice, and resources for CDL drivers. Expert insights on salaries, regulations, and career development."
        />
        <meta 
          name="keywords" 
          content="trucking news, CDL resources, truck driver career advice, trucking industry updates"
        />
        <link rel="canonical" href="https://cdljobsbystate.com/blog" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Trucking News & Resources
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3">{article.author}</span>
                  <Clock className="h-4 w-4 ml-2 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <Link to={`/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  to={`/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
