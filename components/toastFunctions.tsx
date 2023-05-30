import { toast } from "react-toastify";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";

export const toastError = (msg: string) => {
  toast.error(msg, {
    hideProgressBar: true,
    autoClose: 2000,
    icon: (
      <BsFillPatchExclamationFill className="text-[red] w-[2rem] h-[2rem] " />
    ),
  });
};

export const toastSuccess = (msg: string) => {
  toast.success(msg, {
    hideProgressBar: true,
    autoClose: 2000,
    icon: <BsPatchCheckFill className="text-color-dark-blue w-[2rem] h-[2rem] " />,
  });
};