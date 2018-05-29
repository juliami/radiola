export const makeRequestUrl = (album) => {
  let request = 'https://api.deezer.com/search?q=';
  const data = album.data;
  Object.keys(data).forEach(function (key) {
    let prop = `${key}:"${data[key]}"`;
    request = request.concat(prop);
  });
  return request.concat('&output=jsonp');
};
