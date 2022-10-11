//feedback action//---------------------------------------

export const postFeedback = (firstname, lastname, email, message) => (dispatch) => {
    const newFeedback = {
        fistname: firstname,
        lastname: lastname,
        email: email,
        message: message
    }

    return fetch("http://localhost:8080/feedback", {
        method: 'POST',
        body: JSON.stringify({newFeedback}),
        headers: {
            'Content-Type' : 'application.json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            const error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        let errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(response => response.json())
    .then(response => {alert('Thank you for your feedback!\n' + JSON.stringify(response))})
    .catch(error => {
        console.log('Error', error.message);
        alert('Your feedback could not be posted!\nError: ' + error.message);
    });
}

// export const postFeedback = async (e) => {
//     const response = await fetch("http://localhost:3001/send", {
//      method: "POST",
//      headers: {
//        "Content-type": "application/json",
//      },
//      body: JSON.stringify({ mailerState }),
//    })
//      .then((res) => res.json())
//      .then(async (res) => {
//        const resData = await res;
//        console.log(resData);
//        if (resData.status === "success") {
//          alert("Message Sent");
//        } else if (resData.status === "fail") {
//          alert("Message failed to send");
//        }
//      })
//      .then(() => {
//        setMailerState({
//          email: "",
//          name: "",
//          message: "",
//        });
//      });
//  };