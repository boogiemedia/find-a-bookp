import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//............End of imports.......................
interface props {
  setOpen: (value: boolean) => void;
  isOpen: boolean;
  activeCard: any;
}
//...................end of props....................
const style = {
  display: "flex",
  flexDirection: "row",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "50vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
//.........End of styling...................................................

export default function InfoModal({ isOpen, setOpen, activeCard }: props) {
  const info = activeCard.volumeInfo;
  const handleClose = () => setOpen(false);
  return (
    <div>
      {info === undefined ? (
        <></>
      ) : (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isOpen}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={isOpen}>
            <Box sx={style}>
              <Card sx={{ height: 1, width: 0.25, marginRight: "20px" }}>
                <CardMedia
                  sx={{ height: "65%" }}
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={
                    info?.imageLinks?.thumbnail === undefined
                      ? "https://toppng.com/uploads/preview/small-book-cover-template-11550246173rolkzaboiy.png"
                      : info.imageLinks.thumbnail
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.authors}
                  </Typography>
                </CardContent>
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: 0.5,
                }}
              >
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {activeCard.volumeInfo.description === undefined
                    ? "there is no description about this book"
                    : activeCard.volumeInfo.description}
                </Typography>
                <Button
                  onClick={() => window.open(info.infoLink, "_blank")}
                  size="large"
                  sx={{
                    backgroundColor: "grey",
                    margin: "30px 0px 0px 0px",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                  }}
                >
                  go to Google Books
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </div>
  );
}
