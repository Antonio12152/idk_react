import React from "react"
import '../CSS/Pagin.css'
import { Link, useParams } from "react-router-dom"

const Pagin = ({ postsPerPage, TotalPosts, paginate, curentPage }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(TotalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    let pr;
    let ne;
    let prd;
    let ned;
    let first;
    let last;
    let pageNum = parseInt(curentPage)
    let pageCutLow = pageNum - 7;
    let pageCutHigh = curentPage + 7;
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/");
    // if (typeof segments[4] === 'string' && segments[4].trim() !== '' && !isNaN(parseInt(segments[5]))) {
    //     curentPage = parseInt(segments[5])
    // }
    if (curentPage > 1) {
        first = <li className="pag"><Link to={`/${segments[3]}/page/1`} className="pag" onClick={() => paginate(1)}>First</Link></li>;
    }
    if (curentPage > 1) {
        pr = <li className="pag"><Link to={`/${segments[3]}/page/${curentPage - 1}`} className="pag" onClick={() => paginate(curentPage - 1)}>Previous</Link></li>;
    }
    if (pageCutLow > 7) {
        prd = <li className="pag"><Link to={`/${segments[3]}/page/${curentPage - 6}`} className="pag" onClick={() => paginate(curentPage - 6)}>{"<"}</Link></li>;
    }
    if (curentPage < pageNumbers.length) {
        ne = <li className="pag"><Link to={`/${segments[3]}/page/${curentPage + 1}`} className="pag" onClick={() => paginate(curentPage + 1)}>Next</Link></li>;
    }
    if (pageCutHigh < pageNumbers.length) {
        ned = <li className="pag"><Link to={`/${segments[3]}/page/${curentPage + 6}`} className="pag" onClick={() => paginate(curentPage + 6)}>{">"}</Link></li>;
    }
    if (pageCutHigh < pageNumbers.length) {
        last = <li className="pag"><Link to={`/${segments[3]}/page/${pageNumbers.length}`} className="pag" onClick={() => paginate(pageNumbers.length)}>{"Last"}</Link></li>;
    }

    return (
        <nav className="pag nav">
            <ul className="pag">
                {first}
                {pr}
                {prd}
                {pageNumbers.filter(num => num > pageCutLow + 1 && num < pageCutHigh - 1).map(num => (
                    <li key={num} className={curentPage == num ? "active pag" : "pag"}>
                        <Link to={`/${segments[3]}/page/${num}`} onClick={() => { paginate(num) }}>{num}</Link>
                    </li>
                ))}
                {ned}
                {ne}
                {last}
            </ul>
        </nav >
    )
}

export default Pagin