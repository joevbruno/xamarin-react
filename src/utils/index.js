/* eslint-disable */
let ajaxRequestMethod = window.G2.Services.requestJSON;

function success(options, returnedData) {
  if (options.success) {
    return Promise.resolve(options.success(returnedData));
  }
  return Promise.resolve(returnedData);
}

export function fetchIt(options) {
  const mergedOptions = {
    ...options,
    success: success.bind(this, options)
  };

  return Promise.resolve(ajaxRequestMethod(mergedOptions));
}
