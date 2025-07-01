import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
return (<div className="error">
<h1>OOpsss!!!</h1>
<h1>{err.status+":"+err.stausText}</h1>
</div>)

}

export default Error;