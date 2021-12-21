export default {
  fetch(props) {
    const { url, method, data } = props;

    const baseUrl = "http://localhost:7000/";

    const requestOptions = {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(baseUrl + url, requestOptions).then((response) =>
      response.json()
    );
  },
};
