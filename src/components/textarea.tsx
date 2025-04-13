import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '../utils/utils';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: UseFormRegisterReturn;
  error?: string;
}

export default function Textarea({ id, className, register, error, ...props }: Props) {
  return (
    <div>
      <textarea
        id={id}
        className={cn(
          'w-full border rounded-md p-3 focus:ring-black focus:border-black outline-none min-h-36 bg-white shadow-[5px_5px_0px_#232227]',
          className
        )}
        {...register}
        {...props}
      ></textarea>
      {error && (
        <label
          className="ml-1 mt-1 block"
          htmlFor={id}
        >
          <small className="text-red-500">{error}</small>
        </label>
      )}
    </div>
  );
}
