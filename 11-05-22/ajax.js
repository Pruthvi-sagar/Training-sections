console.log("ajax tutorial in one vedio");

let fetchdata = document.getElementById('fetchdata');
fetchdata.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked the fetchdata');

    // Instantiate an xr object
    const xhr = new XMLHttpRequest();

    // open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //use this for post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content type', 'application/json');
    

    // what to do on progress (optional)
    xhr.onprogress = function () {
        console.log('on progress');
    }


    // what to do when response is ready 
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }

        else {
            console.log("Some error occured")
        }
    }
    // send the request 
    params = '{"name":"test888","salary":"123","age":"23"}';
    xhr.send(params);
    console.log("we are done!");

}