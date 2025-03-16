import * as React from "react";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        variant="outlined-none text-white absolute left-1 "
        onClick={handleClickOpen}
      >
        Back End Development
      </button>
      <BootstrapDialog
        className="text-red-300"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title "
          className="font-bold text-4xl bg-white text-blue-500"
        >
          Back End Development
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          <span className="text-xl text-blue-500 font-bold">Technologies to Use :</span><br /> <br /><span className="text-xl text-blue-500"> Node.js :</span> A runtime environment for executing
            JavaScript on the server side.<br /> <span className="text-xl text-blue-500 "> Express.js :</span> A web application
            framework for Node.js to build APIs and handle routing.<br /><span className="text-xl text-blue-500"> MongoDB :</span> A
            NoSQL database for storing and managing data.<br /><span className="text-xl text-blue-500 ">  JavaScript :</span> The
            programming language used for both backend and frontend logic.<br />
          </Typography>

          <Typography gutterBottom>
          <br /><span className="text-xl text-blue-500 font-bold"> Pricing Structure :</span>
          <br /><span className="text-xl text-blue-500 "> 1. Basic Website (3 Pages) <br />Pages :</span> Home, About, Contact.
          <br /><span className="text-xl text-blue-500 ">Features :</span> Responsive design, basic animations, and simple
            interactivity.<br /><span className="text-xl text-blue-500 "> Technologies :</span> HTML, CSS, JavaScript, Bootstrap.
            <br /><span className="text-xl text-blue-500 ">Estimated Time :</span> 1–2 days ~ <span className="text-blue-500 text-xl">Price :</span> $10 – $35.
            <br /><br />
            <span className="text-xl text-blue-500 ">2. Medium Complexity Website (5 Pages)</span> <br /> Pages :Home, About, Services,
            Portfolio, Contact.<br /><span className="text-xl text-blue-500 "> Features :</span> Responsive design, custom animations,
            interactive elements, and reusable components.<br /><span className="text-xl text-blue-500 "> Technologies :</span> HTML,
            CSS, JavaScript, React, Bootstrap/Tailwind CSS.<br /><span className="text-xl text-blue-500 "> Estimated Time :</span> 5-8 days hours ~ <span className="text-xl text-blue-500 ">Price :</span> $35 – $60.
            <br /><br />
            Services, Portfolio, Blog, Pricing, Contact, etc.<br />
            <span className="text-xl text-blue-500 "> Features :</span>
            Responsive design, complex animations, dynamic content, API
            integration, and reusable React components.<br /><span className="text-xl text-blue-500 "> Technologies :</span> HTML, CSS,
            JavaScript, React, Tailwind CSS, Bootstrap (if needed).<br /><span className="text-blue-500 text-xl"> Estimated
            Time :</span> 8-10 days ~ <span className="text-blue-500 text-xl">Price :</span> $60 – $120.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
