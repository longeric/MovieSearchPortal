// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_HOST: 'http://localhost:8080',
  OMDb_HOST: 'https://www.omdbapi.com',
  OMDb_APIKEY: 'c7a67f5a',
  PosterMovieDB_Host: 'https://api.themoviedb.org/3/search/movie?',
  PosterMovieDB_APIKey: '15d2ea6d0dc1d476efbca3eba2b9bbfb',
  Post_API_HOST: 'http://image.tmdb.org/t/p/w500/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
