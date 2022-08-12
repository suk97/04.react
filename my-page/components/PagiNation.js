import React from "react";
import styled from "styled-components";

function PagiNation({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const PageUL = styled.ul`
        list-style: none;
        text-align: center;
    `;

    const PageLI = styled.li`
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        padding: 5px;
        margin: 5px;
        color: white;
        border-radius: 5px;
        &:hover {
            color: red;
            cursor: pointer;
        }
        background: pink;
    `;

    const PageSpan = styled.span`
        
    `;

    return(
        <div>
            <nav>
                <PageUL>
                    {pageNumbers.map(pageNumber => (
                        <PageLI key={pageNumber}>
                            <PageSpan onClick={() => paginate(pageNumber)}>{pageNumber}</PageSpan>
                        </PageLI>
                    ))}
                </PageUL>
            </nav>
        </div>
    )
}

export default PagiNation;