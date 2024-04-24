function withoutkgid() {
  return (
    <div className="container">
        <form action="/candidateRegistration" method="post">
            <div className="text36 brown">Without KG-ID</div>
            <div className="d-flex">
            <div className="text21 brown">Name</div>
            <input type="text" className="candidateName text21 brown" />
            </div>
            <div className="d-flex">
            <div className="text21 brown">Email</div>
            <input type="email" className="candidateEmail text21 brown" />
            <button className="text21">Send</button>
            </div>
            <div className="d-flex">
            <div className="text21 brown">Phone</div>
            <input type="tel" className="candidatePhone text21 brown" />
            </div>
            <div className="d-flex">
            <div className="text21 brown">Phone</div>
            <input type="number" className="otp text21 brown" />
            </div>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  );
}
export default withoutkgid;