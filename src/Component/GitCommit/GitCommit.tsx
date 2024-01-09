// import React, { useEffect } from 'react'

// export default function GitCommit() {
//     const owner = "cedarvindakumar";
//     const repo = "gitcommitTest";
//     const path = "CHANGELOG.md";
//     const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
//     useEffect(() => {

//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Decode the content from base64
//                 const content = atob(data.content);
//                 console.log(content);
//             })
//             .catch((error) => console.error("Error fetching the file:", error));
//     }, []);

//     const headers = new Headers({
//         Authorization: `Bearer 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`,
//     });
//     fetch(apiUrl, { headers })
//         .then(/* ... */)
//         .catch(/* ... */);
//     return (
//         <div>
//             Git commit
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface GitHubCommit {
    sha: string;
    html_url: string;
    commit: {
      author: {
        name: string;
        date: string;
      };
      message: string;
    };
    committer: {
        id: number;
    }
  }

const GitCommit = () => {
    const [commits, setCommits] = useState<GitHubCommit[]>([]);
    const repoOwner = "cedarvindakumar";
    const repoName = "gitcommitTest";
    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
                );

                setCommits(response.data);
            } catch (error) {
                console.error('Error fetching commit history:', error);
            }
        };

        fetchCommits();
    }, [repoOwner, repoName]);

    console.log(commits, 'fffffffff');

    return (
        <div>
            <h2>Commit History</h2>
            <ul>
                {commits.map((commitss, index) => (

                    <li key={index}>
                        <>
                            {
                                console.log(commitss?.commit?.author?.name,'hh')
                            }
                        </>
                        <strong>{commitss.commit.author.name}</strong>: {commitss.commit.message}
                        <p>{commitss.commit.author.date}</p>
                        <a href={commitss.html_url} target='_blank'>#{commitss.committer.id}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitCommit;

