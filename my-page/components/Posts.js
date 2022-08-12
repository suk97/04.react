import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PagiNation from './PagiNation';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 700px;
`;

function Posts () {
    const [posts, setPosts] = useState([]);

    // 현재 페이지 정보
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    // 
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }
    let results = currentPosts(posts);

    useEffect(() => {
        console.log(posts.splice(0,10));


        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);


    return(
        <Layout>
            {results.map(post => (
                <div key={post.id}>
                    <h3>{post.id} - {post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}

            <PagiNation
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            >
            </PagiNation>

        </Layout>
    )
}

export default Posts;