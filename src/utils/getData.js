const getData = (url) => (
    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': '74204c479emsh0e2f0aab91fff7ep1421f1jsnf9869f575cc3'
        }
    })
        .then(res => res.json())
);

export default getData;