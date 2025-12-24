export default function CameraParallax({ children, depth = 0 }) {
  return (
    <div className="camera-parallax" style={{ '--depth': depth }}>
      {children}
    </div>
  );
}