import Withkgid from './WithKGID/withkgid.jsx'
import Withoutkgid from './WithoutKGID/withoutkgid.jsx'
function login(){
    return(
        <div className="d-flex">
            <Withkgid/>
            <Withoutkgid/>
        </div>
    )
}
export default login