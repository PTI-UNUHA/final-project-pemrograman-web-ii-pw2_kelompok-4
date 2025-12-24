'use client';
import { useState } from "react"; 
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [jumlahKlik, setJumlahKlik] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-10 text-slate-800">
        Katalog Produk Sederhana
      </h1>

    
      <p className="mb-4 text-slate-600">
        Jumlah klik: {jumlahKlik}
      </p>
      <button
        onClick={() => setJumlahKlik(jumlahKlik + 1)}
        className="mb-8 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Klik Saya
      </button>
      
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <ProductCard 
          title="Keyboard Mekanik Pro" 
          price={850000} 
          description="Keyboard gaming dengan switch taktil dan lampu RGB. Kualitas premium." 
        />

        <ProductCard 
          title="Mouse Wireless Ergonomis" 
          price={250000} 
          description="Mouse dengan desain nyaman. Baterai tahan lama dan koneksi stabil." 
        />

        <ProductCard 
          title="Monitor 27-inch 4K" 
          price={5999000} 
          description="Resolusi Ultra HD 4K untuk gambar yang super tajam." 
        />

        <ProductCard 
          title="Headset Gaming Dolby Atmos" 
          price={480000} 
          description="Headset dengan suara surround Dolby Atmos yang imersif." 
        />
      </div>
    </main>
  );
}
