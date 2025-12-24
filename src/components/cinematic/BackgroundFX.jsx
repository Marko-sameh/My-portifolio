export default function BackgroundFX({ type = 'particles' }) {
  return (
    <div className={`background-fx ${type}`}>
      <div className="fx-layer"></div>
    </div>
  );
}