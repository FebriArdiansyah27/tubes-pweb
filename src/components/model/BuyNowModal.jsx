import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
const BuyNowModal = ({ buyNowFunction }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button type="button" onClick={handleOpen} className="w-full px-4 py-3 text-center text-gray-100 bg-red-600 border border-transparent dark:border-gray-700 hover:border-red-500 hover:text-red-700 hover:bg-red-100 rounded-xl">
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className="w-80 m-auto shadow-lg">
        <DialogBody className="w-80" style={{ background: "transparent" }}>
          <div className="mb-3">
            <input type="text" name="name" placeholder="Enter your name" className=" border  px-2 py-2 w-full rounded-md outline-none " />
          </div>
          <div className="mb-3">
            <input type="text" name="address" placeholder="Enter your address" className=" border  px-2 py-2 w-full rounded-md outline-none " />
          </div>
          <div className="mb-3">
            <input type="number" name="pincode" placeholder="Enter your pincode" className=" border  px-2 py-2 w-full rounded-md outline-none " />
          </div>
          <div className="mb-3">
            <input type="text" name="mobileNumber" placeholder="Enter your mobileNumber" className=" border  px-2 py-2 w-full rounded-md outline-none " />
          </div>
          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full h-full px-4 py-4 text-center text-gray-100 bg-red-400 hover:bg-red-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};
export default BuyNowModal;
