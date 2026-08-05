const products = [
  { name: "Arc Table Lamp", category: "Lighting", price: "$148", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85" },
  { name: "Soft Form Chair", category: "Furniture", price: "$320", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85" },
  { name: "Ripple Glass Set", category: "Tableware", price: "$64", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85" },
  { name: "Everyday Carryall", category: "Accessories", price: "$92", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">Free shipping on orders over $100</div>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top">GOOD FORM<span>.</span></a>
        <div className="navlinks"><a href="#shop">Shop</a><a href="#story">About</a><a href="#journal">Journal</a></div>
        <a className="cart" href="mailto:orders@goodform.shop?subject=Order%20inquiry">Cart <span>(0)</span></a>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="kicker">Objects for everyday living</p><h1>Less, but<br /><em>much better.</em></h1><p className="lede">Useful, enduring pieces selected for the quiet moments that make a home feel like yours.</p><a className="button dark" href="#shop">Shop the collection <span>↗</span></a></div>
        <div className="hero-image" role="img" aria-label="A calm modern interior with sculptural furniture"><span>Edition 01 — The Everyday Collection</span></div>
      </section>
      <section className="intro" id="story">
        <p className="section-label">Our point of view</p><h2>Things worth keeping.</h2><div><p>We find objects that balance form, function, and feeling. No trends, no excess—just considered pieces made to live with for a long time.</p><a href="#journal">Read our story →</a></div>
      </section>
      <section className="shop" id="shop">
        <div className="section-heading"><div><p className="section-label">Shop</p><h2>New &amp; noteworthy</h2></div><a href="#shop">View all pieces ↗</a></div>
        <div className="product-grid">{products.map((product) => (<article className="product" key={product.name}><a className="product-image" href={`mailto:orders@goodform.shop?subject=${encodeURIComponent(product.name)}`} style={{ backgroundImage: `url(${product.image})` }} aria-label={`Ask about ${product.name}`}><span>View piece</span></a><div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div></article>))}</div>
      </section>
      <section className="feature" id="journal">
        <div className="feature-image" role="img" aria-label="Handcrafted ceramic pieces on a work table"></div><div className="feature-copy"><p className="section-label">Maker story 01</p><h2>Made slowly.<br />Used daily.</h2><p>Meet the independent studios shaping our collection, where patient hands and honest materials turn everyday objects into lasting companions.</p><a className="button light" href="#shop">Discover the makers <span>↗</span></a></div>
      </section>
      <section className="newsletter"><p className="section-label">Keep in touch</p><h2>Notes on good things.</h2><p>A considered email, every now and then. New pieces, studio visits, and ideas for living well.</p><form action="mailto:hello@goodform.shop" method="post"><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" name="email" placeholder="Your email address" required /><button type="submit">Subscribe ↗</button></form></section>
      <footer><a className="brand footer-brand" href="#top">GOOD FORM<span>.</span></a><div><p>Shop</p><a href="#shop">New arrivals</a><a href="#shop">Home</a><a href="#shop">Accessories</a></div><div><p>Information</p><a href="#story">Our story</a><a href="mailto:hello@goodform.shop">Contact</a><a href="#top">Shipping &amp; returns</a></div><p className="fineprint">© 2026 Good Form<br />Thoughtful objects, thoughtfully sourced.</p></footer>
    </main>
  );
}
