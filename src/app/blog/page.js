import Artikel from "@/components/Artikel";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Gagal mengambil data');
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Daftar Post</h1>
      {posts.slice(0, 5).map((post) => (
         <Artikel title={post.title} body={post.body} key={post.id} />
      ))}
    </main>
  );
}

