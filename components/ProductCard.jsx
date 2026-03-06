import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function ProductCard({ product, compact = true }) {
 
  const createSeoFilename = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '.jpg';
  };

 
  const truncateTitle = (title, maxLength = compact ? 35 : 45) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + '...';
  };

  return (
    <div className="product-card" itemScope itemType="https://schema.org/Product">
      <div className="product-image-wrapper">
        <Image 
          src={product.image} 
          alt={product.title}
          title={product.title}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          priority={false}
          className="product-image"
          quality={85}
          loading="lazy"
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-title" itemProp="name">
          {truncateTitle(product.title)}
        </h3>
        <div className="product-meta">
          <p className="signin-text">
            <span>
              <u>Sign in</u> or Create an account to see pricing
            </span>
          </p>
          <Heart 
            size={compact ? 18 : 20} 
            strokeWidth={1.5} 
            className="heart-icon"
            aria-label="Add to wishlist"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              
              console.log('Added to wishlist:', product.title);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Added to wishlist:', product.title);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}