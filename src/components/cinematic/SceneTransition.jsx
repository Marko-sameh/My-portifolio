export default function SceneTransition({ children, isActive }) {
  return (
    <div className={`scene-transition ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
}