//your JS code here. If required.
const promises = [];

for (let i = 0; i < 5; i++) {
    const promise = new Promise((resolve, reject) => {
        const randomNumber = Math.ceil(Math.random() * 10);
        const shouldReject = Math.random() < 0.5;

        if (shouldReject) {
            reject(`Promise ${i+1} rejected with error`);
        } else {
            resolve(randomNumber);
        }
    });

    promises.push(promise);
}

Promise.all(promises)
    .then((results) => {
        results.forEach((result, i) => {
            const message = typeof result === 'number' ? `Promise ${i+1} resolved with ${result}` : result;
            const pTag = document.createElement('p');
            pTag.innerText = message;
            document.getElementById('output').appendChild(pTag);
        });
    })
    .catch((error) => {
        console.log(error);
    });
