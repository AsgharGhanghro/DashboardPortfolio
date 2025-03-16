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
                1. About Me
              </span>{" "}
              <br />
              Hi, I’m Ali Asghar, a passionate and dedicated
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                freelance MERN stack developer{" "}
              </span>{" "}
              with a strong focus on building modern, scalable, and
              user-friendly web applications. With a deep understanding of the{" "}
              <span className="text-blue-500 font-bold ">
                MERN (MongoDB, Express.js, React.js, Node.js) stack
              </span>
              , I specialize in creating robust, high-performance solutions
              tailored to meet the unique needs of my clients. Whether you’re a
              startup, a small business, or an enterprise, I’m here to turn your
              ideas into reality with clean, efficient, and maintainable code.
              <br />
              <span className="text-blue-500 font-bold text-2xl pt-5 ">
                <hr />
                <br />
                2. My Services
              </span>
              <br /> As a MERN stack developer, I offer a wide range of services
              to help businesses and individuals achieve their digital goals:{" "}
              <br />
              <span className="text-blue-500 font-bold text-xl">
                i. Full-Stack Web Development
              </span>{" "}
              - Design and development of dynamic, responsive, and interactive
              web applications from scratch. - End-to-end solutions using the
              MERN stack for seamless frontend and backend integration.
              <br />{" "}
              <span className="text-blue-500 font-bold text-xl">
                ii. Frontend Development
              </span>{" "}
              - Building intuitive and visually appealing user interfaces using
              React.js. - Ensuring responsive design for optimal performance
              across all devices.
              <br />{" "}
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                iii. Backend Development
              </span>
              - Developing secure, scalable, and efficient server-side
              applications using Node.js and Express.js. - RESTful API
              development and integration for smooth communication between
              frontend and backend.
              <br />{" "}
              <span className="text-blue-500 font-bold text-xl">
                iv. Database Management{" "}
              </span>{" "}
              - Designing and managing MongoDB databases for efficient data
              storage and retrieval. - Optimizing database performance and
              ensuring data security.
              <br />{" "}
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                v. Custom Web Solutions
              </span>{" "}
              - Tailored solutions to meet specific business requirements,
              including e-commerce platforms, SaaS applications, and more.
              <br />{" "}
              <span className="text-blue-500 font-bold text-xl">
                vi. Maintenance and Support
              </span>{" "}
              - Ongoing support, bug fixes, and updates to ensure your
              application runs smoothly. <br />{" "}
              <span className="text-blue-500 font-bold text-2xl pt-3">
                <hr />
                <br />
                3. My Expertise
              </span>{" "}
              - Proficient in MERN Stack: Extensive experience working with
              MongoDB, Express.js, React.js, and Node.js to build full-stack
              applications. - Responsive Design: Expertise in creating
              mobile-friendly and cross-browser compatible web applications. -
              API Integration: Skilled in developing and integrating RESTful
              APIs for seamless data exchange. - State Management: Proficient in
              using tools like Redux or Context API for efficient state
              management in React applications. - Version Control: Experienced
              in using Git and GitHub for collaborative development and version
              control. - Problem-Solving: Strong analytical and problem-solving
              skills to deliver efficient and innovative solutions.
              <br />
              <span className="text-blue-500 font-bold text-2xl ">
                <hr />
                <br />
                4. Why Choose Me?
              </span>
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                i. Client-Centric Approach:
              </span>{" "}
              I prioritize understanding your vision and goals to deliver
              solutions that align with your business objectives.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                ii. High-Quality Work:
              </span>{" "}
              I am committed to delivering clean, well-documented, and
              maintainable code that meets industry standards.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                iii. Timely Delivery:
              </span>{" "}
              I respect deadlines and ensure projects are completed on time
              without compromising quality.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                iv. Transparent Communication:
              </span>{" "}
              I believe in keeping clients informed at every stage of the
              project, ensuring a smooth and collaborative process.
              <br />
              <span className="text-blue-500 font-bold text-xl">
                {" "}
                v. Affordable Rates:
              </span>{" "}
              As a freelancer, I offer competitive pricing without compromising
              on quality, making professional web development accessible to all.{" "}
              <br />
              <span className="text-blue-500 font-bold text-2xl ">
                <hr />
                <br />
                5. Let’s Work Together!
              </span>{" "}
              If you’re looking for a reliable, skilled, and passionate MERN
              stack developer to bring your ideas to life, I’d love to hear from
              you. Let’s collaborate to create something amazing!
              <span className="text-blue-500 font-bold ">
                {" "}
                Feel free to reach out to discuss your project or get a free
                consultation
              </span>
              . Together, we can build the future of the web!
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
