self.addEventListener('message', (event) => {
    // console.log(`Web worker started with data: ${ event.data }`);

    let data = event.data.do;
    switch(data) {
        // case 'Get Started':
        //     self.postMessage('Web Worker Started');
        //     break;
        // case 'Other':
        //     self.postMessage('Other task...');
        //     break;
        case 'fetch':
            let url = 'http://jsonplaceholder.typicode.com/users';
            console.log('About to fetch the data');
            fetch(url)
            .then(res => res.json())
            .then(data => {
                self.postMessage(data);
            })
            .catch(err => console.log(err));

            break;
        default:
            console.log('Invalid access');
            self.postMessage('Closing web worker');
            self.close();
    }
})