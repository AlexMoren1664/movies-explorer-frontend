export class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this._getResponse);
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
    }).then(this._getResponse);
  }

  editUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponse);
  }

  getNewMovies(data) {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        movieId: data.movieId,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
      }),
    }).then(this._getResponse);
  }

  deleteMovies(MoviesId) {
    return fetch(`${this.baseUrl}/movies/${MoviesId}`, {
      headers: this.headers,
      method: "DELETE",
    }).then(this._getResponse);
  }

  register(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    }).then(this._getResponse);
  }

  autorize(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponse);
  }

  getContent(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  setToken(token) {
    this.headers.authorization = `Bearer ${token}`;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.movies21.students.nomoredomains.monster",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
export default mainApi;
