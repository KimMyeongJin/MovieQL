let movies = [
    {
      id: 0,
      name: "Nicolas",
      score: 1
    },
    {
      id: 1,
      name: "Jisu",
      score: 2
    },
    {
      id: 2,
      name: "Japan Guy",
      score: 3
    },
    {
      id: 3,
      name: "Daal",
      score: 4
    },
    {
      id: 4,
      name: "JD",
      score: 5
    },
    {
      id: 5,
      name: "moondaddi",
      score: 6
    },
    {
      id: 6,
      name: "flynn",
      score: 7
    },
    {
        id:7,
        name:"lagom",
        score: 8
    }
  ];  

  export const getMovies = () => movies;

  export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
  };

  export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length) {
      movie = cleanedMovies;
      return true;
    } else {
      return false;
    }
  }