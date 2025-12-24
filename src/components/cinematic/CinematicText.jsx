export default function CinematicText({ text, delay = 0 }) {
  return (
    <div className="cinematic-text" style={{ animationDelay: `${delay}ms` }}>
      {text}
    </div>
  );
}