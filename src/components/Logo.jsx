export default function Logo({ size = 'normal', className = '' }) {
  const sizeClass = size === 'large'
    ? 'w-36 sm:w-44'
    : size === 'small'
      ? 'w-20'
      : 'w-[92px] sm:w-[120px]';

  return (
    <img
      src="/images/logo-auto-socorro-dudu.jpeg"
      alt="Auto Socorro Dudu — reboque 24 horas em São Luís e região"
      className={`block h-auto rounded-md object-contain ${sizeClass} ${className}`}
    />
  );
}

