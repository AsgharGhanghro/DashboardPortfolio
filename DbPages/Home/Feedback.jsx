
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { SiMinutemailer } from "react-icons/si";
import { IoMdMicrophone } from "react-icons/io";
import MarkUnreadChatAltRoundedIcon from '@mui/icons-material/MarkUnreadChatAltRounded';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser'; 
import 'react-toastify/dist/ReactToastify.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const emailData = {
      user_name: data.Email,  
      user_email: data.Number,  
      message: data.comment,  
    };

    console.log("Sending email with data:", emailData);

    emailjs.send('service_rdnp30f', 'template_y6wbv6p', emailData, 'RyAVoqL79Wvg9GDeF')
      .then(() => {
        toast.success("Thanks for your response!");  
        setOpen(false); 
      })
      .catch((error) => {
        toast.error("Failed to send feedback!");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <React.Fragment>
      <Button variant="outlined-none text-white absolute left-1 " onClick={() => setOpen(true)}>
        Feedback
      </Button>
      
      <BootstrapDialog className="text-red-300" onClose={() => setOpen(false)} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} className="font-bold text-4xl bg-slate-100 text-blue-500">
          Feedback
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100">
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent dividers>
            <Typography gutterBottom className="text-black font-bold pb-3 text-2xl">
              Please give your feedback for my improvement.
            </Typography>

            <label className="input focus:outline-none text-black bg-white shadow-lg flex items-center gap-2 m-3">
              <SiMinutemailer className="text-2xl text-black" />
              <input type="email" className="grow" placeholder="Email"
                {...register("Email", { required: "Email is required", maxLength: 30 })}
              />
            </label>
            {errors.Email && <span className="text-red-700 ml-5 text-sm">{errors.Email.message}</span>}

            <label className="input focus:outline-none text-black bg-white flex items-center gap-2 m-3 shadow-lg">
              <IoMdMicrophone className="text-2xl text-black" />
              <input type="text" className="grow" placeholder="Phone Number"
                {...register("Number", { 
                  required: "Phone Number is required", 
                  pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
                  minLength: { value: 10, message: "Must be at least 10 digits" },
                  maxLength: { value: 15, message: "Cannot exceed 15 digits" }
                })}
              />
            </label>
            {errors.Number && <span className="text-red-700 ml-5 text-sm">{errors.Number.message}</span>}

            <label className="input focus:outline-transparent bg-white text-black flex items-center gap-2 m-3 shadow-lg">
              <MarkUnreadChatAltRoundedIcon className="text-2xl text-black" />
              <input type="text" className="grow" placeholder="Comment"
                {...register("comment", { required: "Comment is required", maxLength: 500 })}
              />
            </label>
            {errors.comment && <span className="text-red-700 ml-5 text-sm">{errors.comment.message}</span>}
          </DialogContent>

          <DialogActions>
            <input className="text-black mt-2 mb-2 mr-3 cursor-pointer font-bold text-xl py-2 px-6 rounded-lg shadow-2xl bg-white transform transition duration-500 hover:scale-110"
              type="submit"
            />
            <ToastContainer />
          </DialogActions>
        </form>
      </BootstrapDialog>
    </React.Fragment>
  );
}
