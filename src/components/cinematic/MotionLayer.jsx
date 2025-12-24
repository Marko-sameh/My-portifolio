export default function MotionLayer({ children, speed = 1 }) {
  return (
    <div className="motion-layer" style={{ '--speed': speed }}>
      {children}
    </div>
  );
}