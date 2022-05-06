import GenresInDb from './GenresInDb'
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {
    return (
        <div className="container-fluid">
                                       
        <ContentRowMovies />
            
            <div className="row">
 
        <GenresInDb />
        <LastMovieInDb />
            </div>
        </div>     


    )
}

export default ContentRowTop;