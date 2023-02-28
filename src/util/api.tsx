export default function api(data: string) {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${data}:keyes&key=AIzaSyC_XuqTA4YKYZ4pvQOZlYDjIT61t7wxO-o`,
    {
      method: "get",
    }
  ).then((res) => res.json());
}
