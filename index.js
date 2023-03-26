// We can read file using inbuilt node file system module.we use fs module
const fs = require('fs')
//but this file system module has no idea of csv file.
//when we use text file as input they red as string file.
//here we using csv-parse module.
const { parse } = require('csv-parse')
const resault = [];
//Here making function that checking that planet is habitable or not ?
function isHabitablePlanets(planet) {
    t1 = Date.now()
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}
//This method return bit of stream as buffer object.
const file = fs.createReadStream('Data.csv')
    //here pipe function is used to connect two stream like readbale and writeable text.
    //Link : https://www.educative.io/answers/what-is-stream-module-pipe-in-nodejs
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanets(data)) {
            resault.push(data)
        }


    })
    .on('error', (err) => {
        console.log(`There is error : ${err.message}`)
    })
    .on('end', () => {
        console.log(`Total habitable planet is ${resault.length} and resault are : `)
        // for (i = 0; i < resault.length; i++) {
        //     console.log(resault[i].kepoi_name);
        // }
        //map through array
        resault.map((planet)=>{console.log(planet.kepoi_name)})
        t2 = Date.now();
        console.log(`Your Date Done processing data in ${Math.floor((t2-t1))}ms`)
        console.log("Done processing data.")
    });


