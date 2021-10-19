const axios = require("axios").default;
require("dotenv").config();

// // let x = {
// //   sha: "4978b6932de28036a6896357cb35b0c24f03fc83",
// //   node_id:
// //     "MDY6Q29tbWl0NDAyODI5NjIwOjQ5NzhiNjkzMmRlMjgwMzZhNjg5NjM1N2NiMzViMGMyNGYwM2ZjODM=",
// //   commit: {
// //     author: {
// //       name: "Nikshay",
// //       email: "38729484+Nikshay19@users.noreply.github.com",
// //       date: "2021-09-08T07:25:00Z",
// //     },
// //     committer: {
// //       name: "Nikshay",
// //       email: "38729484+Nikshay19@users.noreply.github.com",
// //       date: "2021-09-08T07:25:00Z",
// //     },
// //     message: "build",
// //     tree: {
// //       sha: "89403559248913bbf7c143f8953f1caa3cf0bf25",
// //       url: "https://api.github.com/repos/Nikshay19/Calculator/git/trees/89403559248913bbf7c143f8953f1caa3cf0bf25",
// //     },
// //     url: "https://api.github.com/repos/Nikshay19/Calculator/git/commits/4978b6932de28036a6896357cb35b0c24f03fc83",
// //     comment_count: 0,
// //     verification: {
// //       verified: false,
// //       reason: "unsigned",
// //       signature: null,
// //       payload: null,
// //     },
// //   },
// //   url: "https://api.github.com/repos/Nikshay19/Calculator/commits/4978b6932de28036a6896357cb35b0c24f03fc83",
// //   html_url:
// //     "https://github.com/Nikshay19/Calculator/commit/4978b6932de28036a6896357cb35b0c24f03fc83",
// //   comments_url:
// //     "https://api.github.com/repos/Nikshay19/Calculator/commits/4978b6932de28036a6896357cb35b0c24f03fc83/comments",
// //   author: {
// //     login: "Nikshay19",
// //     id: 38729484,
// //     node_id: "MDQ6VXNlcjM4NzI5NDg0",
// //     avatar_url: "https://avatars.githubusercontent.com/u/38729484?v=4",
// //     gravatar_id: "",
// //     url: "https://api.github.com/users/Nikshay19",
// //     html_url: "https://github.com/Nikshay19",
// //     followers_url: "https://api.github.com/users/Nikshay19/followers",
// //     following_url:
// //       "https://api.github.com/users/Nikshay19/following{/other_user}",
// //     gists_url: "https://api.github.com/users/Nikshay19/gists{/gist_id}",
// //     starred_url:
// //       "https://api.github.com/users/Nikshay19/starred{/owner}{/repo}",
// //     subscriptions_url: "https://api.github.com/users/Nikshay19/subscriptions",
// //     organizations_url: "https://api.github.com/users/Nikshay19/orgs",
// //     repos_url: "https://api.github.com/users/Nikshay19/repos",
// //     events_url: "https://api.github.com/users/Nikshay19/events{/privacy}",
// //     received_events_url:
// //       "https://api.github.com/users/Nikshay19/received_events",
// //     type: "User",
// //     site_admin: false,
// //   },
// //   committer: {
// //     login: "Nikshay19",
// //     id: 38729484,
// //     node_id: "MDQ6VXNlcjM4NzI5NDg0",
// //     avatar_url: "https://avatars.githubusercontent.com/u/38729484?v=4",
// //     gravatar_id: "",
// //     url: "https://api.github.com/users/Nikshay19",
// //     html_url: "https://github.com/Nikshay19",
// //     followers_url: "https://api.github.com/users/Nikshay19/followers",
// //     following_url:
// //       "https://api.github.com/users/Nikshay19/following{/other_user}",
// //     gists_url: "https://api.github.com/users/Nikshay19/gists{/gist_id}",
// //     starred_url:
// //       "https://api.github.com/users/Nikshay19/starred{/owner}{/repo}",
// //     subscriptions_url: "https://api.github.com/users/Nikshay19/subscriptions",
// //     organizations_url: "https://api.github.com/users/Nikshay19/orgs",
// //     repos_url: "https://api.github.com/users/Nikshay19/repos",
// //     events_url: "https://api.github.com/users/Nikshay19/events{/privacy}",
// //     received_events_url:
// //       "https://api.github.com/users/Nikshay19/received_events",
// //     type: "User",
// //     site_admin: false,
// //   },
// //   parents: [
// //     {
// //       sha: "f2f131c727400906eb5f7c4960d306b6338f32ed",
// //       url: "https://api.github.com/repos/Nikshay19/Calculator/commits/f2f131c727400906eb5f7c4960d306b6338f32ed",
// //       html_url:
// //         "https://github.com/Nikshay19/Calculator/commit/f2f131c727400906eb5f7c4960d306b6338f32ed",
// //     },
// //   ],
// // };

// // // axios
// // //   .get(`https://api.github.com/repos/Nikshay19/loopback-next/commits?per_page=100`)
// // //   .then((res) => {
// // //     console.log(res.data.length);
// // //   })
// // //   .catch((err) => {
// // //     console.log(err);
// // //   });

// // //   axios
// // //   .get(`https://api.github.com/repos/Nikshay19/Calculator/events?per_page=1000`)
// // //   .then((res) => {
// // //     console.log(res.data[0].payload.commits);
// // //   })
// // //   .catch((err) => {
// // //     console.log(err);
// // //   });

// // // axios.get(
// // //     `https://api.github.com/repos/Nikshay19/quiz-node-version`
// // //   ).then((res)=>{
// // //       console.log(res.data);
// // //   }).catch((e)=>{console.log(e);})

// async function githubMetrics() {
//   let recursive = true;
//   let pageNumber = 1;

//   const res = await axios.get(
//     `https://api.github.com/repos/Nikshay19/Calculator/stats/contributors?page=${pageNumber}&per_page=100`
//   );
//   console.log(res.data);
//   const githubMetricsMap = new Map();

//   if (res.data) {
//     for (const el of res.data) {
//       let totalCommit = 0;
//       let deletedLines = 0;
//       let addedLines = 0;
//       if (el.weeks && el.weeks.length > 0) {
//         for (const week of el.weeks) {
//           deletedLines += week.d;
//           addedLines += week.a;
//         }
//       }
//       totalCommit = el.total;
//       if (githubMetricsMap.has(el.author.login)) {
//         githubMetricsMap.set(
//           `${el.author.login}_deletedLines`,
//           githubMetricsMap.get(`${el.author.login}_deletedLines`) + deletedLines
//         );
//         githubMetricsMap.set(
//           `${el.author.login}_addedLines`,
//           githubMetricsMap.get(`${el.author.login}_addedLines`) + addedLines
//         );
//         githubMetricsMap.set(
//           `${el.author.login}_totalCommit`,
//           githubMetricsMap.get(`${el.author.login}_totalCommit`) + totalCommit
//         );
//       } else {
//         githubMetricsMap.set(el.author.login, "author");
//         githubMetricsMap.set(`${el.author.login}_deletedLines`, deletedLines);
//         githubMetricsMap.set(`${el.author.login}_addedLines`, addedLines);
//         githubMetricsMap.set(`${el.author.login}_totalCommit`, totalCommit);
//       }
//     }
//   }
//   const gitHubMetricsIterator = githubMetricsMap[Symbol.iterator]();

//   const githubMetricsResponeArray = [];
//   let githubMetricsResponeObj = {};
//   for (const el of gitHubMetricsIterator) {
//     if (el[1] === "author") {
//       githubMetricsResponeObj.authorName = el[0];
//     } else {
//       githubMetricsResponeObj[el[0].split("_")[1]] = el[1];
//     }
//     if (Object.keys(githubMetricsResponeObj).length === 4) {
//       githubMetricsResponeArray.push(githubMetricsResponeObj);
//       githubMetricsResponeObj = {};
//     }
//   }
//   console.log(githubMetricsResponeArray);
// }

// // // axios
// // //   .get(`https://api.github.com/repos/Nikshay19/quiz-node-version/stats/contributors`).then((res)=>console.log(res)).catch((err)=>console.log(err))

// let recursive = true;

// function timeout() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("proceed");
//     }, 1000);
//   });
// }
// // const sonarCloudMetricMap = new Map();
// // let sonarCloudMetricsObj = {};
// // let pageNumber = 1;
// // while (recursive) {
// //   console.log(pageNumber, "pgno");
// //   axios
// //     .get(
// //       "https://sonarcloud.io/api/issues/search?additionalFields=_all,comments,languages,actionPlans,rules,transitions,actions,users&asc=true&branch=master&componentKeys=Nikshay19_quiz-node-version&ps=500&p=" +
// //         pageNumber +
// //         ""
// //     )
// //     .then((res) => {
// //       console.log(res.data);
// //       // const response = await axios.get('https://sonarcloud.io/api/measures/component_tree?component=Nikshay19_quiz-node-version&branch=master&metricKeys=bugs,code_smells,lines,vulnerabilities&additionalFields=metrics')
// //       // for (const el of response.data.baseComponent.measures) {
// //       //   sonarCloudMetricMap.set(el.metric,el.value?Number(el.value):0)
// //       // }
// //       if (
// //         res.data &&
// //         typeof res.data === "object" &&
// //         Object.keys(res.data).length > 0 &&
// //         res.data.issues &&
// //         res.data.issues.length > 0
// //       ) {
// //         let count = 0;
// //         for (const el of res.data.issues) {
// //           sonarCloudMetricMap.has(el.severity)
// //             ? sonarCloudMetricMap.set(
// //                 el.severity,
// //                 sonarCloudMetricMap.get(el.severity) + 1
// //               )
// //             : sonarCloudMetricMap.set(el.severity, count++);
// //           count = 0;
// //           sonarCloudMetricMap.has(el.type)
// //             ? sonarCloudMetricMap.set(
// //                 el.type,
// //                 sonarCloudMetricMap.get(el.type) + 1
// //               )
// //             : sonarCloudMetricMap.set(el.type, count++);
// //           count = 0;
// //         }
// //         const sonarCloudMetricsIterator =
// //           sonarCloudMetricMap[Symbol.iterator]();

// //         for (const el of sonarCloudMetricsIterator) {
// //           sonarCloudMetricsObj[el[0]] = el[1];
// //         }
// //       } else {
// //         recursive = false;
// //       }
// //       pageNumber++;
// //     })
// //     .catch((err) => {});
// // }
// // console.log(sonarCloudMetricsObj);

// async function sonarmetrics() {
//   let recursive = true;
//   let pageNumber = 1;
//   let sonarCloudMetricMap = new Map();
//   let sonarCloudMetricsObj = {};
//   const { data: response_metric_measures } = await axios.get(
//     `https://sonarcloud.io/api/measures/component_tree?component=neojarvis_sample_test_repo&branch=main&metricKeys=bugs,code_smells,lines,vulnerabilities&additionalFields=metrics`,
//     {
//       auth: {
//         username: "30d4dcd001e2869ad849ffbece87016f0906cdf5",
//         password: "", // Password is not needed
//       },
//     }
//   );
//   console.log(response_metric_measures);
//   // while (recursive) {
//   //   console.log(pageNumber);
//   //   const res = await axios.get(
//   //     "https://sonarcloud.io/api/issues/search?additionalFields=_all,comments,languages,actionPlans,rules,transitions,actions,users&asc=true&branch=master&componentKeys=neojarvis_sample_test_repo&ps=500&p=" +
//   //       pageNumber +
//   //       "",
//   //   );
//   //   console.log(res);
//   //   if (
//   //     res.data &&
//   //     typeof res.data === "object" &&
//   //     Object.keys(res.data).length > 0 &&
//   //     res.data.issues &&
//   //     res.data.issues.length > 0
//   //   ) {
//   //     for (const el of res.data.issues) {
//   //       let severityTagCount = 0;
//   //       let metricTypeTagCount = 0;
//   //       sonarCloudMetricMap.has(el.severity)
//   //         ? sonarCloudMetricMap.set(
//   //             el.severity,
//   //             sonarCloudMetricMap.get(el.severity) + 1
//   //           )
//   //         : sonarCloudMetricMap.set(el.severity, ++severityTagCount);
//   //       sonarCloudMetricMap.has(el.type)
//   //         ? sonarCloudMetricMap.set(
//   //             el.type,
//   //             sonarCloudMetricMap.get(el.type) + 1
//   //           )
//   //         : sonarCloudMetricMap.set(el.type, ++metricTypeTagCount);
//   //     }
//   //     const sonarCloudMetricsIterator = sonarCloudMetricMap[Symbol.iterator]();

//   //     for (const el of sonarCloudMetricsIterator) {
//   //       sonarCloudMetricsObj[el[0]] = el[1];
//   //     }
//   //   } else {
//   //     recursive = false;
//   //   }
//   //   ++pageNumber;
//   // }
//   return sonarCloudMetricsObj;
// }

// sonarmetrics()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function fetchMetricsFromSonarCloud(projectKey, branch) {
//   const sonarCloudMetricMap = new Map();
//   let recursive = true;
//   let pageNumber = 1;
//   // const { data: response_metric_measures } = await axios.get(
//   //   `https://sonarcloud.io/api/measures/component_tree?component=${projectKey}&branch=${branch}&metricKeys=bugs,code_smells,lines,vulnerabilities&additionalFields=metrics`,
//   //   {
//   //     auth: {
//   //       username: "5f823c56a6fb3dad72af67881b48e2997ba46b33",
//   //       password: "", // Password is not needed
//   //     },
//   //   }
//   // );

//   // if (
//   //   response_metric_measures &&
//   //   response_metric_measures.baseComponent &&
//   //   typeof response_metric_measures.baseComponent === "object" &&
//   //   Object.keys(response_metric_measures.baseComponent).length > 0 &&
//   //   response_metric_measures.baseComponent.measures &&
//   //   Array.isArray(response_metric_measures.baseComponent.measures) &&
//   //   response_metric_measures.baseComponent.measures.length > 0
//   // ) {
//   //   for (const el of response_metric_measures.baseComponent.measures) {
//   //     sonarCloudMetricMap.set(el.metric, el.value ? Number(el.value) : 0);
//   //   }
//   // }

//   while (recursive) {
//     //timeout for 1s, in case sonar cloud rate limits the request
//     console.log(">>> waiting for a second <<<");
//     // await timeout();
//     const { data: response_severity_tags } = await axios.get(
//       `https://sonarcloud.io/api/issues/search?additionalFields=_all,comments,languages,actionPlans,rules,transitions,actions,users&asc=true&branch=${branch}&componentKeys=${projectKey}&ps=500&types=CODE_SMELL,BUG,VULNERABILITY&p=${pageNumber}`,
//       {
//         auth: {
//           username: "ef2cd05f804d0b09e18c6b5f11ead8f9ab7b8ca4",
//           password: "", // Password is not needed
//         },
//       }
//     );
//     console.log(response_severity_tags);
//     if (
//       response_severity_tags.issues &&
//       Array.isArray(response_severity_tags.issues) &&
//       response_severity_tags.issues.length > 0
//     ) {
//       for (const el of response_severity_tags.issues) {
//         let severityCount = 0;
//         let metricCount = 0;

//         if (sonarCloudMetricMap.has(el.author)) {
//           sonarCloudMetricMap.has(`${el.author} ${el.severity}`)
//             ? sonarCloudMetricMap.set(
//                 `${el.author} ${el.severity}`,
//                 sonarCloudMetricMap.get(`${el.author} ${el.severity}`) + 1
//               )
//             : sonarCloudMetricMap.set(
//                 `${el.author} ${el.severity}`,
//                 ++severityCount
//               );

//           sonarCloudMetricMap.has(`${el.author} ${el.type}`)
//             ? sonarCloudMetricMap.set(
//                 `${el.author} ${el.type}`,
//                 sonarCloudMetricMap.get(`${el.author} ${el.type}`) + 1
//               )
//             : sonarCloudMetricMap.set(`${el.author} ${el.type}`, ++metricCount);
//         } else {
//           sonarCloudMetricMap.set(el.author, "author");
//           sonarCloudMetricMap.set(
//             `${el.author} ${el.severity}`,
//             ++severityCount
//           );
//           sonarCloudMetricMap.set(`${el.author} ${el.type}`, ++metricCount);
//         }
//       }
//     } else {
//       recursive = false;
//     }
//     ++pageNumber;
//   }
//   const sonarCloudMetricsIterator = sonarCloudMetricMap[Symbol.iterator]();
//   console.log(sonarCloudMetricMap);
//   const sonarMetricsArray = [];
//   let sonarMetricObj = {};
//   if (sonarCloudMetricMap.size > 0) {
//     for (const el of sonarCloudMetricsIterator) {
//       if (el[1] === "author") {
//         if (Object.keys(sonarMetricObj).length > 0) {
//           sonarMetricsArray.push(sonarMetricObj);
//           sonarMetricObj = {};
//         }
//       }
//       sonarMetricObj[el[1] === "author" ? "author" : el[0].split(" ")[1]] =
//         el[1] === "author" ? el[0] : el[1];
//     }
//   }
//   sonarMetricsArray.length !== 0 && Object.keys(sonarMetricObj).length > 0
//     ? sonarMetricsArray.push(sonarMetricObj)
//     : null;
//   return sonarMetricsArray.length
//     ? sonarMetricsArray
//     : Object.keys(sonarMetricObj).length > 0
//     ? sonarMetricObj
//     : null;
// }

//fetch project metrics once build and analyses is complete
async function fetchMetricsFromSonarCloud(projectKey, branch, sonarAuthToken) {
  const sonarCloudMetricMap = new Map();
  const sonarMetricsArray = [];
  let sonarMetricObj = {};
  let recursive = true;
  let pageNumber = 1;
  // const { data: response_metric_measures } = await axios.get(
  //   `https://sonarcloud.io/api/measures/component_tree?component=${projectKey}&branch=${branch}&metricKeys=bugs,code_smells,lines,vulnerabilities&additionalFields=metrics`,
  //   {
  //     auth: {
  //       username: sonarAuthToken,
  //       password: "", // Password is not needed
  //     },
  //   }
  // );

  // if (
  //   response_metric_measures &&
  //   response_metric_measures.baseComponent &&
  //   typeof response_metric_measures.baseComponent === "object" &&
  //   Object.keys(response_metric_measures.baseComponent).length > 0 &&
  //   response_metric_measures.baseComponent.measures &&
  //   Array.isArray(response_metric_measures.baseComponent.measures) &&
  //   response_metric_measures.baseComponent.measures.length > 0
  // ) {
  //   for (const el of response_metric_measures.baseComponent.measures) {
  //     sonarCloudMetricMap.set(el.metric, el.value ? Number(el.value) : 0);
  //   }
  // }

  while (recursive) {
    //timeout for 1s, in case sonar cloud rate limits the request
    console.log(">>> waiting for a second <<<");
    const { data: response_severity_tags } = await axios.get(
      `https://sonarcloud.io/api/issues/search?additionalFields=_all,comments,languages,actionPlans,rules,transitions,actions,users&asc=true&branch=${branch}&componentKeys=${projectKey}&ps=500&types=CODE_SMELL,BUG,VULNERABILITY&p=${pageNumber}`,
      {
        auth: {
          username: sonarAuthToken,
          password: "", // Password is not needed
        },
      }
    );
    console.log(response_severity_tags);
    if (
      response_severity_tags.issues &&
      Array.isArray(response_severity_tags.issues) &&
      response_severity_tags.issues.length > 0
    ) {
      for (const el of response_severity_tags.issues) {
        let severityCount = 0;
        let metricCount = 0;
        let obj = {};

        if (sonarCloudMetricMap.has(el.author)) {
          sonarCloudMetricMap.get(el.author)[el.severity] =
            sonarCloudMetricMap.get(el.author)[el.severity] !== undefined &&
            sonarCloudMetricMap.get(el.author)[el.severity] !== null
              ? ++sonarCloudMetricMap.get(el.author)[el.severity]
              : ++severityCount;

          sonarCloudMetricMap.get(el.author)[el.type] =
            sonarCloudMetricMap.get(el.author)[el.type] !== undefined &&
            sonarCloudMetricMap.get(el.author)[el.type] !== null
              ? ++sonarCloudMetricMap.get(el.author)[el.type]
              : ++metricCount;
        } else {
          obj["author"] = el.author;
          obj[el.severity] = ++severityCount;
          obj[el.type] = ++metricCount;
          sonarCloudMetricMap.set(el.author, obj);
        }
      }
    } else {
      recursive = false;
    }
    ++pageNumber;
  }

  const sonarCloudMetricsIterator = sonarCloudMetricMap[Symbol.iterator]();
  for (const el of sonarCloudMetricsIterator) {
    sonarMetricsArray.push(el[1]);
  }
  return sonarMetricsArray;
}

fetchMetricsFromSonarCloud(
  "iamneo-production_04ce0a0f-3990-44c2-8a4b-dd93d4d5affe",
  "main",
  "811c9a490983734401ba4e491eaefc8bfa7281de"
)
  .then((res) => {
    console.log(res);
  })
  // .then((res) => console.log(res))
  .catch((err) => console.log(err));

async function getGithubMetrics(gitHubOrganisation, gitHubRepo) {
  const githubMetricsMap = new Map();
  const githubMetricsResponeArray = [];
  let githubMetricsResponeObj = {};
  const githubMetrics = await axios.get(
    `https://api.github.com/repos/${gitHubOrganisation}/${gitHubRepo}/stats/contributors`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  console.log(githubMetrics.data);
  if (githubMetrics.data) {
    for (const el of githubMetrics.data) {
      let totalCommit = 0;
      let deletedLines = 0;
      let addedLines = 0;
      if (el.weeks && el.weeks.length > 0) {
        for (const week of el.weeks) {
          deletedLines += week.d;
          addedLines += week.a;
        }
      }
      totalCommit = el.total;
      if (githubMetricsMap.has(el.author.login)) {
        githubMetricsMap.set(
          `${el.author.login}_deletedLines`,
          githubMetricsMap.get(`${el.author.login}_deletedLines`) + deletedLines
        );
        githubMetricsMap.set(
          `${el.author.login}_addedLines`,
          githubMetricsMap.get(`${el.author.login}_addedLines`) + addedLines
        );
        githubMetricsMap.set(
          `${el.author.login}_totalCommit`,
          githubMetricsMap.get(`${el.author.login}_totalCommit`) + totalCommit
        );
      } else {
        githubMetricsMap.set(el.author.login, "author");
        githubMetricsMap.set(`${el.author.login}_deletedLines`, deletedLines);
        githubMetricsMap.set(`${el.author.login}_addedLines`, addedLines);
        githubMetricsMap.set(`${el.author.login}_totalCommit`, totalCommit);
      }
    }
    const gitHubMetricsIterator = githubMetricsMap[Symbol.iterator]();
    for (const el of gitHubMetricsIterator) {
      if (el[1] === "author") {
        githubMetricsResponeObj.authorName = el[0];
      } else {
        githubMetricsResponeObj[el[0].split("_")[1]] = el[1];
      }
      if (Object.keys(githubMetricsResponeObj).length === 4) {
        githubMetricsResponeArray.push(githubMetricsResponeObj);
        githubMetricsResponeObj = {};
      }
    }
  }
  console.log(githubMetricsMap);
  return githubMetricsResponeArray;
}

// getGithubMetrics("iamneo-production", "9e5e1c8c-86c5-41af-a06e-a924210dde4f")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fs = require("fs");

let project_key = "neojarvis-testing_9036cfc0-b7f4-40f8-a9ba-f9b2785d03e5";
let organization = "neojarvis-testing";

let property = `sonar.projectKey=${project_key}\n sonar.organization=${organization}`;

console.log(Buffer.from(property).toString("base64"));

// axios
//   .get(
//     `https://sonarcloud.io/api/issues/search?additionalFields=_all,comments,languages,actionPlans,rules,transitions,actions,users&asc=true&branch=master&componentKeys=Nikshay19_Calculator&ps=500&types=CODE_SMELL,BUG,VULNERABILITY`,
//     {
//       auth: {
//         username: "ef2cd05f804d0b09e18c6b5f11ead8f9ab7b8ca4",
//         password: "", // Password is not needed
//       },
//     }
//   )
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**
 * 
 * 
 * 
 * "github": {
"clientId": "fed95352b3a11893ccf8",
"clientSecret": "a75cd2604774e167c7426c4b8ff9dab9dc237c5a",
"redirectURL": "https://virtusacoetraining.examly.io/mycourses/details",
"organisationName": "iamneo-production",
"adminToken": "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",
"studentToken": "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"
},
"sonarCloud": {
"sonarOrgName": "iamneo-production",
"sonarAuthToken": "811c9a490983734401ba4e491eaefc8bfa7281de"
}
 */
