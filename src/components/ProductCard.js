import React from 'react';

// Fungsi untuk memformat harga ke Rupiah
const formatPrice = (price) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
};

/**
 * Komponen ProductCard dengan desain yang dinamis berdasarkan props.
 * Menerima props: title, price, description, dan styleClass untuk variasi.
 */
const ProductCard = ({ title, price, description, styleClass }) => {
    
    const baseStyle = "max-w-sm w-full rounded-xl overflow-hidden shadow-xl p-6 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl";
    const cardClass = `${baseStyle} ${styleClass || 'bg-white text-gray-800'}`;

    return (
        <div className={cardClass}>
            
            {/* Judul Produk */}
            <h3 className="font-extrabold text-2xl mb-2">
                {title}
            </h3>

            {/* Harga Produk */}
            <div className="font-bold text-xl mb-3 text-green-400">
                {formatPrice(price)}
            </div>

            {/* Deskripsi Singkat */}
            <p className="text-sm mb-6 opacity-80">
                {description}
            </p>

            {/* Tombol "Beli" */}
            <button className="bg-white text-indigo-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out border border-transparent">
                Beli
            </button>
        </div>
    );
};

export default ProductCard;