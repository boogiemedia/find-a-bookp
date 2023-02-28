import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//................End of imports..................................
interface props {
  data: any;
  handleModalOpen: any;
  setactiveCard: any;
}
//...................End of props............................................
export default function Book({ data, handleModalOpen, setactiveCard }: props) {
  const info = data.volumeInfo;
  function cardClick() {
    handleModalOpen();
    setactiveCard(data);
  }
  return (
    <Card
      sx={{
        width: "15vw",
        margin: "0px 20px 20px 0px",
        height: "30vw",
      }}
    >
      <CardActionArea onClick={cardClick}>
        <CardMedia
          sx={{ paddingTop: "15px" }}
          component="img"
          height="50%"
          image={
            info.imageLinks?.thumbnail === undefined
              ? "https://toppng.com/uploads/preview/small-book-cover-template-11550246173rolkzaboiy.png"
              : info.imageLinks.thumbnail
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.authors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
