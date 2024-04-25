import Withkgid from './WithKGID/withkgid.jsx'
import Withoutkgid from './WithoutKGID/withoutkgid.jsx'
function login(){
    return(
        <div className="d-flex">
            <div className='creamBackground w-50'>

            <Withkgid/>
            </div>
            <div className='yellowBackground w-50'>

            <Withoutkgid/>
            </div>
        </div>
    )
}
export default login