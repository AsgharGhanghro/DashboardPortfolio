import * as React from "react";
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
        variant="outlined-none text-white absolute text-xl"
       className="font-medium"
        onClick={handleClickOpen}
      >
        API Integration
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
          Information
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
          <span className="text-xl text-blue-500 font-bold">Technologies to Use :</span><br /> <br /><span className="text-xl text-blue-500">Node.js :</span> For backend logic and API
            handling.<br /> <span className="text-xl text-blue-500 "> Express.js :</span> For creating API endpoints and
            routing. <br /><span className="text-xl text-blue-500">RESTful APIs :</span> For integrating with third-party
            services. <br /><span className="text-xl text-blue-500">Postman :</span> For testing API endpoints. Authentication
            <br /><span className="text-xl text-blue-500">Methods :</span> OAuth, API keys, JWT, etc. Database: MongoDB, MySQL, or
            PostgreSQL (if data storage is required).
            <br />
          </Typography>

          <Typography gutterBottom>
          <br /><span className="text-xl text-blue-500 font-bold"> Pricing Structure :</span>
          <br /><span className="text-xl text-blue-500 ">1. Basic API Integration (3 APIs) APIs :</span> Payment gateway
            (e.g., Stripe, PayPal). Social media login (e.g., Google, Facebook).
            Email service (e.g., SendGrid, Mailchimp). <br /><span className="text-xl text-blue-500 ">Features :</span> Simple API
            calls (GET, POST). Basic error handling and logging. Data validation
            and sanitization. <br /><span className="text-xl text-blue-500 "> Estimated Time :</span> 1-2 days ~  <span className="text-blue-500 text-xl">Price :</span> $20 – $40.
            <br /><br />
            <span className="text-xl text-blue-500 ">2. Medium Complexity API Integration (5 APIs) APIs :</span> Payment gateway
            (e.g., Stripe, PayPal). Social media login (e.g., Google, Facebook).
            Email service (e.g., SendGrid, Mailchimp). Mapping service (e.g.,
            Google Maps API). Weather service (e.g., OpenWeatherMap).<br /><span className="text-xl text-blue-500 "> Features :</span>
            Advanced API calls (PUT, DELETE, PATCH). Authentication (e.g.,
            OAuth, API keys). Data transformation and mapping. Error handling
            and retry mechanisms. API documentation (e.g., Swagger).<br /><span className="text-xl text-blue-500 "> Estimated
            Time :</span> 3-6 days ~<span className="text-xl text-blue-500 "> Price :</span> $40 - $80.
            <br /><br />
            <span className="text-xl text-blue-500 ">3. Advanced API Integration (10 APIs) APIs :</span> Payment gateway (e.g.,
            Stripe, PayPal). Social media login (e.g., Google, Facebook). Email
            service (e.g., SendGrid, Mailchimp). Mapping service (e.g., Google
            Maps API). Weather service (e.g., OpenWeatherMap). SMS service
            (e.g., Twilio). Analytics service (e.g., Google Analytics). Custom
            APIs (e.g., client-provided APIs). Cloud storage (e.g., AWS S3,
            Cloudinary). Machine learning API (e.g., TensorFlow, OpenAI).
            <br /><span className="text-xl text-blue-500 ">Features :</span> Complex API calls with authentication and authorization.
            Data transformation, filtering, and aggregation. Real-time data
            synchronization (e.g., WebSockets). Advanced error handling and
            logging. API rate limiting and caching. Comprehensive API
            documentation and testing. <br /><span className="text-xl text-blue-500 ">Estimated Time :</span> 8-10 days ~<span className="text-xl text-blue-500 "> Price :</span> $80 - $140.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
