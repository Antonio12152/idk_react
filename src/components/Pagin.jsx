import React from "react"
import '../CSS/Pagin.css'
import { Link } from "react-router-dom"

const Pagin = ({ postsPerPage, TotalPosts, paginate, curentPage }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(TotalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    let pr;
    let ne;
    let prd;
    let ned;
    let pageCutLow = curentPage - 14;
    let pageCutHigh = curentPage + 14;
    if (curentPage > 1) {
        pr = <li className="pag"><a href="#" className="pag" onClick={() => paginate(curentPage - 1)}>Previous</a></li>;
    }
    if (pageCutLow > 14) {
        prd = <li className="pag"><a href="#" className="pag" onClick={() => paginate(curentPage - 13)}>{"<"}</a></li>;
    }
    if (curentPage < pageNumbers.length) {
        ne = <li className="pag"><a href="#" className="pag" onClick={() => paginate(curentPage + 1)}>Next</a></li>;
    }
    if (pageCutHigh < pageNumbers.length) {
        ned = <li className="pag"><a href="#" className="pag" onClick={() => paginate(curentPage + 13)}>{">"}</a></li>;
    }
    return (
        <nav className="pag nav">
            <ul className="pag">
                {pr}
                {prd}
                {pageNumbers.filter(num => num > pageCutLow + 1 && num < pageCutHigh - 1).map(num => (
                    <li key={num} className={curentPage == num ? "active pag" : "pag"}>
                        <Link to={`./`} onClick={() => paginate(num)}>{num}</Link>
                    </li>
                ))}
                {ned}
                {ne}
            </ul>
        </nav >
    )
}

export default Pagin