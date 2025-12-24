'use client';

import Artikel from '@/components/Artikel';
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 5));
        setLoading(false);
      })
      .catch(() => {
        setError('Gagal memuat data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Daftar Post (Client)</h1>
      
       {
        posts.map( (post) =>
            <Artikel title={post.title} body={post.body} key={post.id} />
        )   
    }
    
    </main>
  );
}