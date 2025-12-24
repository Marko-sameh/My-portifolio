export default function GlassCard({ children, blur = 'md' }) {
  return (
    <div className={`glass-card blur-${blur}`}>
      {children}
    </div>
  );
}