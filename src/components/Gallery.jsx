export default function Gallery() {
  return (
    <div className="zine-container">
      <h1 className="zine-title">THE DIGITAL ZINE</h1>

      <div className="zine-page text">
        <p>"I blink and the world glitches back into pink."</p>
      </div>

      <div className="zine-page image">
        <img src="/zine/sketch1.jpg" alt="Handmade sketch" />
      </div>

      <div className="zine-page lyrics">
        <blockquote>
          <p>
            The rain said my name<br />
            and the bass believed it.
          </p>
        </blockquote>
      </div>

      <div className="zine-page embed">
        <iframe src="https://www.youtube.com/embed/your-song-id" />
      </div>
    </div>
  );
}
