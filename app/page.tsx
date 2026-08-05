const menuHighlights = [
  { name: "Burrata & Summer Peach", detail: "basil oil · toasted hazelnut", price: "$18" },
  { name: "Wild Mushroom Tagliatelle", detail: "brown butter · pecorino", price: "$29" },
  { name: "Ember-Roasted Branzino", detail: "fennel · preserved lemon", price: "$69" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Luma home">LUMA<span>•</span></a>
          <div className="navlinks">
            <a href="#story">Our story</a>
            <a href="#menu">Menu</a>
            <a href="#visit">Visit</a>
          </div>
          <a className="reserve-small" href="#reserve">Reserve a table</a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Seasonal Italian · Las Vegas</p>
          <h1>Come for dinner.<br /><em>Stay for the night.</em></h1>
          <p className="intro">A neighborhood dining room where handmade pasta, open-fire cooking, and good wine meet warm hospitality.</p>
          <div className="hero-actions">
            <a className="button light" href="#reserve">Book your table <span>↗</span></a>
            <a className="text-link" href="#menu">Explore the menu <span>↓</span></a>
          </div>
        </div>
        <p className="side-note">Dinner nightly · 5—11 PM</p>
        <div className="scroll">SCROLL <span></span></div>
      </section>

      <section className="story" id="story">
        <div className="story-number">01</div>
        <div className="story-copy">
          <p className="eyebrow dark">Our philosophy</p>
          <h2>Simple food,<br /><em>beautifully made.</em></h2>
        </div>
        <div className="story-body">
          <p>We cook with the rhythm of the seasons, sourcing from small farms and makers we know by name.</p>
          <p>Our menu changes often. Our promise doesn’t: thoughtful food, honest ingredients, and a table that always feels like yours.</p>
          <a href="#menu">Discover our story <span>→</span></a>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-image" role="img" aria-label="Fresh handmade pasta served at Luma"></div>
        <div className="menu-panel">
          <p className="eyebrow">From the kitchen</p>
          <h2>Tonight’s<br /><em>favorites</em></h2>
          <div className="menu-list">
            {menuHighlights.map((item) => (
              <div className="menu-item" key={item.name}>
                <div><h3>{item.name}</h3><p>{item.detail}</p></div>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <a className="button outline" href="#menu">View full menu <span>→</span></a>
        </div>
      </section>

      <section className="quote">
        <p>“The kind of place you wish<br />was around the corner.”</p>
        <span>— The Infatuation</span>
      </section>

      <section className="reserve" id="reserve">
        <div>
          <p className="eyebrow">Your table is waiting</p>
          <h2>Let’s make it<br /><em>a night.</em></h2>
        </div>
        <a className="button light large" href="mailto:hello@lumalasvegas.com?subject=Table%20reservation">Reserve a table <span>↗</span></a>
      </section>

      <footer id="visit">
        <a className="wordmark footer-mark" href="#home">LUMA<span>•</span></a>
        <div><p>284 Fremont Street<br />Las Vegas, NV 89101</p><a href="https://maps.google.com/?q=284+Fremont+Street+Las+Vegas+NV+89101" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        <div><p>Sun—Thu 5—10 PM<br />Fri—Sat 5—11 PM</p><a href="mailto:hello@lumalasvegas.com">hello@lumalasvegas.com</a></div>
        <p className="copyright">© 2026 Luma</p>
      </footer>
    </main>
  );
}
