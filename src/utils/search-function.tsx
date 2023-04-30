export const searchFilter = (text: string, movies: any[], setMoviesSearched: any, setSearch: any) => {
    if (text) {
      const newData = movies?.filter((item) => {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setMoviesSearched(newData);
      setSearch(text);
    }
    else {
        setSearch('')
        setMoviesSearched(movies);

    }
};