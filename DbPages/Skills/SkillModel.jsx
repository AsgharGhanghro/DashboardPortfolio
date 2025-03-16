import * as React from "react";
import Button from "@mui/material/Button";
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
      <Button
        variant="outlined-none text-white absolute left-1 "
        onClick={handleClickOpen}
      >
        More
      </Button>
      <BootstrapDialog
        className="text-red-300"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title "
          className="font-bold text-6xl text-blue-500"
        >
          Further Information
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
            <Typography gutterBottom className="text-sm text-black">
              <span className="text-blue-500 font-bold text-2xl">
                My Skills
              </span>{" "}
              <br />
              As a versatile and skilled developer, I bring a wide range of
              technical expertise to the table. My proficiency in both frontend
              and backend technologies allows me to deliver comprehensive,
              high-quality web solutions. Here’s a breakdown of my core skills:{" "}
              <br /><br />
              <span className="text-blue-500 font-bold text-2xl">
                Frontend Development
              </span>
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                1. React.js
              </span>{" "}
              - Expertise in building dynamic, interactive, and reusable user
              interfaces using React.js. - Proficient in state management using
              tools like Redux and Context API. - Skilled in creating
              single-page applications (SPAs) with seamless navigation and
              performance.
              <br />
              <span className="text-blue-500 font-bold "> 2. HTML & CSS</span> -
              Strong foundation in HTML5 and CSS3 for structuring and styling
              web pages. - Ability to create visually appealing, responsive, and
              cross-browser compatible designs.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                3. Bootstrap
              </span>{" "}
              - Proficient in using Bootstrap to build responsive, mobile-first
              websites quickly and efficiently. - Experience in customizing
              Bootstrap components to match unique design requirements.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                4. Tailwind CSS
              </span>{" "}
              - Skilled in using Tailwind CSS to create modern, utility-first
              designs with minimal custom CSS. - Ability to build highly
              customizable and responsive layouts using Tailwind’s framework.
              <br />
              <hr />
              <br />
              <span className="text-blue-500 font-bold text-2xl">
                Backend Development{" "}
              </span>
              <br />
              <span className="text-blue-500 font-bold text-xl">
                1. Node.js
              </span>{" "}
              - Expertise in building scalable and efficient server-side
              applications using Node.js. - Proficient in handling asynchronous
              operations and event-driven programming.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                2. Express.js
              </span>{" "}
              - Skilled in developing RESTful APIs and backend services using
              Express.js. - Experience in middleware integration, routing, and
              error handling for robust backend systems.
              <hr />
              <br />
              <span className="text-blue-500 font-bold text-2xl">
                Database Management
              </span>
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                1. MongoDB{" "}
              </span>
              - Proficient in designing and managing NoSQL databases using
              MongoDB. - Skilled in CRUD operations, data modeling, and
              optimizing database performance. - Experience in integrating
              MongoDB with Node.js and Express.js for seamless data management.
              <hr />
              <br />
              <span className="text-blue-500 font-bold text-2xl">
                Programming Languages
              </span>
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                1. JavaScript
              </span>{" "}
              - Strong command of JavaScript, including ES6+ features, for both
              frontend and backend development. - Proficient in writing clean,
              modular, and maintainable code.
              <hr />
              <br />
              <span className="text-blue-500 font-bold text-2xl">
                Additional Skills
              </span>{" "}
              <br />
              <span className="text-blue-500 font-bold text-xl">
                Version Control:
              </span>{" "}
              Experienced in using Git and GitHub for collaborative development
              and version control.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                Responsive Design:
              </span>{" "}
              Expertise in creating websites and applications that work
              flawlessly across all devices and screen sizes. <br />
              <span className="text-blue-500 font-bold text-xl">
                Problem-Solving:
              </span>{" "}
              Strong analytical and problem-solving skills to tackle complex
              challenges and deliver efficient solutions. <br />
              <span className="text-blue-500 font-bold text-xl">
                API Integration:
              </span>{" "}
              Skilled in integrating third-party APIs and services to enhance
              application functionality. <hr />
              <br />
              <span className="text-blue-500 font-bold text-2xl">
                Why My Skills Matter
              </span>
              <br /> My diverse skill set allows me to handle every aspect of
              web development, from designing intuitive user interfaces to
              building robust backend systems and managing databases. Whether
              you need a simple website, a complex web application, or a custom
              solution, I have the tools and expertise to bring your vision to
              life. With a focus on clean code, performance optimization, and
              user experience, I ensure that every project I work on is not only
              functional but also scalable and future-proof. Let’s collaborate
              to create something amazing! Feel free to reach out to discuss how
              my skills can help you achieve your goals. 
              <br />
              <br /> Contact -{" "}
              <span className="text-blue-500 text-xl font-bold">
                0320-2376159
              </span>
              <br />
              Website Link -{" "}
              <span className="text-blue-500 text-sm font-bold">
                https://agency-lyart-five.vercel.app/
              </span>{" "}
              <br /> Fiver Link -{" "}
              <span className="text-blue-500   font-bold ">
                https://www.fiverr.com/users/asghar_ned/manage_gigs
              </span>
              <br />
            </Typography>
          </DialogContent>
      
      </BootstrapDialog>
    </React.Fragment>
  );
}
