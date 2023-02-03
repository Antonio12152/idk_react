import React from "react"
import { Link } from "react-router-dom"

const Pagin = ({ postsPerPage, TotalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(TotalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map(num => (
                    <li key={num}>
                        <Link to={`./`} onClick={() => paginate(num)}>{num}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagin