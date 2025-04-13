import { cn } from '../utils/utils';

interface Props {
  className?: string;
  image?: string;
  fallback: string;
}

export default function Avatar({ className, image, fallback }: Props) {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-full overflow-hidden flex border shadow-black shadow-2',
        className
      )}
    >
      {image ? (
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="avatar image"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-white">
          <span className="block text-sm font-semibold">{fallback}</span>
        </div>
      )}
    </div>
  );
}
