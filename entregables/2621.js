/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            resolve("algo random");
            reject("yoo");
        }, millis)

    });

}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */