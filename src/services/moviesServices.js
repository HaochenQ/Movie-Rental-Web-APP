import http from "./httpServices";

const apiEndpoint = "/movies";

function movieURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(id) {
  return http.get(movieURL(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieURL(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(movieURL(id));
}
