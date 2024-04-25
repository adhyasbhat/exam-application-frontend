import React from 'react'
function withkgid(){
    return(
        <>
        <div className="container">
        <form action="/candidateRegistration" method="post">
    <div className="text36 brown">With KG-ID</div>
    <div className="d-flex">
        <div className="text21 brown">KG-ID</div>
        <input type="text" className="KgidValue text21 brown"/>
        <button className="text21 yellowBackground">Verify</button>
    </div>
    <div className="d-flex">
        <div className="text21 brown">Name</div>
        <input type="text" className="candidateName text21 brown"/>
    </div>
    <div className="d-flex">
        <div className="text21 brown">Email</div>
        <input type="email" className="candidateEmail text21 brown"/>
    </div>
    <div className="d-flex">
        <div className="text21 brown">Phone</div>
        <input type="tel" className="candidatePhone text21 brown"/>
    </div>
    <div className="d-flex">
        <div className="d-flex">
            <div className="text21 brown">DOB</div>
            <input type="date" className="candidateDob text21 brown"/>
        </div>
        <div className="d-flex">
            <div className="text21 brown">DOJ</div>
            <input type="date" className="candidateDoj text21 brown"/>
        </div>
    </div>
    <button className="yellowBackground"type="submit">Submit</button>
</form>

        </div>
        </>
    )
}
export default withkgid