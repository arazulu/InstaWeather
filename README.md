Built with...

REACT, NEXT.JS, THEME-UI and third-party api's:

- Unsplash - image api: https://unsplash.com/developers
- Mapbox - Geocoding api: https://docs.mapbox.com/api/search/
- Openweathermap - OneCall api: https://openweathermap.org/api/one-call-api

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Main styling: Theme-ui Notes

- to access 'webkit' property: write 1st letter capitalized. Ex) 'WebkitBackgroundClip"
- for breakpoints: 1st in array is min-width and EVERYTHING BELOW that point, the rest act the same as 'min-width'. ex) breakpoints ['400px', '500px', '800px']
- for breakpoints: in array start from lowest to highest min-width
- to use keyframes: w/in the same object where animation name was called create a keyframes object with quotes and exact syntax. Ex)
  "@keyframes blob": {
  "0%": {
  ///properties here
  }...
  }
