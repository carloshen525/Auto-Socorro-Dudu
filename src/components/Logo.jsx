export default function Logo({ size = 'normal', className = '' }) {
  const sizeClass = size === 'large'
    ? 'w-28 sm:w-32'
    : size === 'small'
      ? 'w-12'
      : 'w-12 sm:w-16';

  return (
    <img
      src="/images/logo-auto-socorro-dudu.jpeg"
      alt="Auto Socorro Dudu — reboque 24 horas em São Luís e região"
      className={`block h-auto rounded-md object-contain ${sizeClass} ${className}`}
    />
  );
}

