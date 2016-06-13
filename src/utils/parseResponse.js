export default function parseResponse(res) {
  if (res.ok) {
    return res.json();
  }

  const err = new Error(res.statusText);
  err.response = res;
  throw err;
}