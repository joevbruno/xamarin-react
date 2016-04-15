/* eslint-disable */
const ajaxRequestMethod = window.PostMessage; // eslint-disable-line new-cap

export function fetchIt(url, params) {
  return new Promise((resolve, reject) => {
    ajaxRequestMethod(url, (data) => {
      if (data) resolve(data);
      if (!data) reject('no data!');
    });
  });
}
