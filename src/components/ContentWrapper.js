import Topbar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import GenresInDb from './GenresInDb'
import ContentRowMovies from './ContentRowMovies'
import LastMovieInDb from "./LastMovieInDb";

function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Topbar />
                <ContentRowTop />
            </div>
            <Footer />
        </div>

    )
}

export default ContentWrapper;