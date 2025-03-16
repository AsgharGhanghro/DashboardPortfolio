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
          className="font-bold text-2xl  text-blue-500"
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
              I started a new journey of my life in Anwar-u-Mustafa, and it
              changed my life. I passed the fifth class from there. After Anwar
              School, I further studied at Paras College Kandiaro, which made me
              better than before. I continued my studies in the same college
              until passing my intermediate in engineering, and I experienced
              the best days of my life there with the best teachers. Now, I am a
              student at NED University Tharparkar Campus, Mithi, in the
              Computer Science department, where I am learning the experience of
              life. From my journey, my dreams have evolved over time. Starting
              with building a strong educational foundation in my early years, I
              developed a passion for technical and scientific fields during my
              intermediate studies. Now, as a Computer Science student, my dream
              is to become a skilled software engineer or developer, using
              technology to solve real-world problems and make a meaningful
              impact in the tech industry.
            </Typography>
          </DialogContent>
         
        
      </BootstrapDialog>
    </React.Fragment>
  );
}
