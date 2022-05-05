import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return(
        <div>
            <ErrorMessage/>
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>
                no such page was found
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link 
                    style={{display: 'inline-block', textDecoration:'underline', margin: '0 auto', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}
                    to="/"
                > 
                    Back to main page
                </Link>
            </div>
            
                
        </div>
    )
}

export default Page404;