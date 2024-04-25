import React from 'react';

function withoutkgid() {
  const sendOTP = () => {
    const candidateEmail = document.querySelector('#wocandidateEmail').value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(candidateEmail);
    if (!regex.test(candidateEmail)) {
      alert('Enter a valid email id');
    } else {
      fetch('http://localhost:5000/api/findCandidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: candidateEmail,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') {
            alert('OTP sent successfully');
          } else {
            alert('Failed to send OTP');
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="text36 brown">Without KG-ID</div>
      <div className="d-flex">
        <div className="text21 brown">Name</div>
        <input type="text" className="text21 brown" id="wocandidateName" />
      </div>
      <div className="d-flex">
        <div className="text21 brown">Email</div>
        <input type="email" className="text21 brown" id="wocandidateEmail" />
        <button className="text21 sendButton" onClick={sendOTP}>Send</button>
      </div>
      <div className="d-flex">
        <div className="text21 brown">Phone</div>
        <input type="tel" className=" text21 brown" id="candidatePhone"/>
      </div>
      <div className="d-flex">
        <div className="text21 brown">OTP</div>
        <input type="number" className="text21 brown" id="wootp"/>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default withoutkgid;
