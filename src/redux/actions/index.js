export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
export const SAVE_HOME_RESULTS = "SAVE_HOME_RESULTS";

export const saveSearchResults = results => ({ type: SAVE_SEARCH_RESULTS, payload: results });
export const saveHomeResults = results => ({ type: SAVE_HOME_RESULTS, payload: results });
