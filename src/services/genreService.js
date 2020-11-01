import http from "./httpServices";

const apiEndpoint = "/genres";

export default async function getGenres() {
  const { data: genres } = await http.get(apiEndpoint);
  return genres;
}
