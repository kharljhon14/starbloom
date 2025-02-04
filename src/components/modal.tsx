import { X } from 'lucide-react';
import Button from './button';

export default function Modal() {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black/60 backdrop-blur z-10 flex items-center justify-center">
      <div className="bg-white border pb-4 pt-6 px-3 rounded-md w-full max-h-[620px] mx-4 shadow-black shadow-full overflow-y-scroll relative transition-all duration-300">
        <div className="absolute right-4 top-3">
          <Button
            showBackground={false}
            className="w-7 h-7 p-0"
          >
            <X />
          </Button>
        </div>

        {/* Modal header */}
        <div className="border-b pb-2 pt-4">
          <h1 className=" text-lg">This is the Header</h1>
        </div>
        {/* Modal Body */}
        <div className="my-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident, libero
            tempore a deserunt quas accusantium fugiat eius veritatis sequi, commodi temporibus
            voluptatum perferendis eaque, nobis blanditiis reprehenderit nisi optio? Officiis, quia
            amet praesentium illum dignissimos eos earum harum similique, consequuntur tempore qui
            accusamus ipsum vero nemo nesciunt neque tenetur? Accusamus tenetur cum eaque, aut
          </p>
        </div>
        {/* Modal Footer */}
        <div className="border-t pt-2">
          <Button secondaryColor="danger">Close</Button>
        </div>
      </div>
    </div>
  );
}
