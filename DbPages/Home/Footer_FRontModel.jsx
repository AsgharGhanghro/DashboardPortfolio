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
        variant="outlined-none text-white absolute  "
        onClick={handleClickOpen}
      >
        Front End Development
      </button>
      <BootstrapDialog
        className="text-red-300 text-sm"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title "
          className="font-bold text-4xl bg-white text-blue-500"
        >
         Front End Develpment
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
            <span className="text-xl text-blue-500 font-bold">Technologies to Use :</span><br /> <br /><span className="text-xl text-blue-500">HTML :</span> For structuring the content of the
            website.<br /> <span className="text-xl text-blue-500 ">CSS :</span> For styling the website (custom designs).<br /><span className="text-xl text-blue-500"> JavaScript :</span>
            For adding interactivity and dynamic features.<br /><span className="text-xl text-blue-500 "> React :</span> For building
            reusable components and single-page applications (SPAs).<br /><span  className="text-xl text-blue-500 "> Bootstrap :</span>
            For responsive design and pre-built components.<br /><span  className="text-xl text-blue-500 ">Tailwind CSS :</span>  For
            utility-first CSS framework to speed up development.
            <br />
          </Typography>

          <Typography gutterBottom>
            <br /><span className="text-xl text-blue-500 font-bold">Pricing Structure :</span>
            <br /><span className="text-xl text-blue-500 "> 1. Basic Backend (3 Features/Endpoints) Features :</span> User
            authentication (login/signup). CRUD operations for one model (e.g.,
            blog posts, products). Basic API endpoints for fetching data.
            <br /><span className="text-xl text-blue-500 ">Technologies :</span> Node.js, Express.js, MongoDB. <br /><span className="text-xl text-blue-500 ">Estimated Time :</span> 1-2 Days ~ <span className="text-blue-500 text-xl"> Price :</span> $10 – $30.
            <br /><br />
            <span className="text-xl text-blue-500 ">2. Medium Complexity Backend (5 Features/Endpoints) Features :</span> User
            authentication (login/signup with JWT or sessions). CRUD operations
            for 2-3 models (e.g., users, products, orders). API endpoints for
            filtering, sorting, and pagination. File upload functionality (e.g.,
            images, documents). Basic error handling and validation.
            <br /><span className="text-xl text-blue-500 ">Technologies :</span> Node.js, Express.js, MongoDB.<br /><span className="text-xl text-blue-500 "> Estimated Time :</span> 4-7
            days ~ <span className="text-xl text-blue-500 ">Price :</span> $30 – $50.
            <br />
           <br /><span className="text-xl text-blue-500 "> 3. Advanced Backend (10 Features/Endpoints) Features :</span> User
            authentication and authorization (e.g., admin/user roles). CRUD
            operations for 4-5 models (e.g., users, products, orders, reviews).
            Advanced API features (e.g., search, filtering, sorting,
            pagination). Integration with third-party APIs (e.g., payment
            gateways, email services). Real-time features using WebSockets
            (e.g., chat, notifications). File upload and storage (e.g., AWS S3,
            Cloudinary). Data validation and error handling. Unit testing and
            API documentation (e.g., Swagger). Deployment and CI/CD setup.
            <br /><span className="text-xl text-blue-500 ">Technologies :</span> Node.js, Express.js, MongoDB.<br /><span className="text-blue-500 text-xl"> Estimated Time :</span> 7-10 days
            ~ <span className="text-blue-500 text-xl">Price :</span> $50 - $100.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
