export default function api(data: string) {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${data}&printType=books&:keyes&key=AIzaSyC_XuqTA4YKYZ4pvQOZlYDjIT61t7wxO-o`,
    {
      method: "get",
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log("API  CALL ( GET ) ERROR : \n", err);
    });
}
