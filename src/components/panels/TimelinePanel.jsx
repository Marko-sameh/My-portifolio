export default function TimelinePanel({ scenes }) {
  return (
    <div className="timeline-panel">
      {scenes?.map((scene, i) => (
        <div key={i} className="timeline-item">{scene}</div>
      ))}
    </div>
  );
}