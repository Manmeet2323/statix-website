export function Button({ children, variant = 'default', ...props }) {
  const styles = {
    default: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-black text-black hover:bg-gray-100'
  };
  return (
    <button className={`px-4 py-2 rounded font-semibold ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
