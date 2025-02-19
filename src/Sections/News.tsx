"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
  urlToImage: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
}

const TrendingNews: React.FC = () => {
  const [data, setData] = useState<[]>();


  const fetchTrendingNews = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_NEWS_API}`);
    setData(response.data.articles)
    return response.data.articles;
  };

  useEffect(() => {
    fetchTrendingNews()
  },[]);

  return (
    <div className="p-6 h-screen text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Trending News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((article: Article, index: number) => (
          <div key={index} className="bg-[#303030] p-4 rounded-lg shadow-md hover:bg-gray-700">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more
            </a>
            <p className="text-xs text-gray-400 mt-2">{new Date(article.publishedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
