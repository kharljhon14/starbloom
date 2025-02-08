import { InputHTMLAttributes, useState } from 'react';
import Button from './button';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../utils/utils';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ type, id, className, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative w-full">
        <input
          id={id}
          className={cn(
            `w-full border rounded-md p-3 focus:ring-black focus:border-black outline-none bg-white shadow-[5px_5px_0px_#232227] ${
              type === 'password' && 'pr-10'
            }`,
            className
          )}
          type={showPassword ? 'text' : type}
          {...props}
        />
        {type === 'password' && (
          <div className="absolute right-4 top-0 flex items-center justify-center h-full">
            <Button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              showBackground={false}
              variant="secondary"
              className="w-6 h-6 p-0 inset-1"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
        )}
      </div>
      <label
        className="ml-1 mt-1 block"
        htmlFor={id}
      >
        {/* <small className="text-red-500">Please enter a valid email</small> */}
      </label>
    </div>
  );
}
