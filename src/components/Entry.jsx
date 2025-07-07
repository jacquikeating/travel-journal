export default function Entry(props) {
  return (
    <article className="journal-entry">
      <img className="entry-image" src={props.img.src} alt="Mount Fuji" />
      <div className="info-container">
        <img
          className="marker"
          src="/src/assets/marker.png"
          alt={props.img.alt}
        />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink} className="maps-link">
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
