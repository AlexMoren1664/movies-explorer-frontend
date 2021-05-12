export const getMovies = () => {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      }
    });
  };
  