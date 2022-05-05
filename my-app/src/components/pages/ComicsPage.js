import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import {Helmet} from "react-helmet";

const ComicsPage = () =>{
    return(
        <>
            <Helmet>
                <title>Комікси</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>       
        </>
    )
}

export default ComicsPage;

