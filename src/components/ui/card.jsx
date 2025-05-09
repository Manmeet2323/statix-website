export function Card({ children }) {
  return <div className="border rounded-2xl shadow-sm bg-white">{children}</div>;
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}
