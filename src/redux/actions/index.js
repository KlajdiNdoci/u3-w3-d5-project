export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
export const SAVE_HOME_RESULTS = "SAVE_HOME_RESULTS";

export const saveSearchResults = songs => ({ type: SAVE_SEARCH_RESULTS, payload: songs });
export const saveHomeResults = results => ({ type: SAVE_HOME_RESULTS, payload: results });

export const search = query => {
  return async dispatch => {
    if (query.length > 2) {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "4dee4a6d79msh10e7f11101e9eafp1eb14cjsn68ce37f58686",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);

        if (response.ok) {
          const result = await response.json();
          const songs = result.data;

          dispatch(saveSearchResults(songs));
        } else {
          console.log("Errore nella ricerca");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
};
