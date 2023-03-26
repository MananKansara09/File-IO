# 🌟 Magic of Asynchronous in Nodejs 🌟   

## Kepler Data processing.

- Here We used CSV data to processing All data that look like similar to Earth data.
- Here in this project we use nodejs inbuilt fs module to processed data.
- We use createReadStream() function which return data as buffer stream and that buffer stream pipe to another writeable stream as parse() function which we use library.
- Then all processed data is filler with isHabitablePlanets() function.
- Here in this project out off 8000-10000 data there is fillter out only 8 planet which is related to earth and thier possibilties to life at that planet.