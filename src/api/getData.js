const apiKey = {
    my: '74204c479emsh0e2f0aab91fff7ep1421f1jsnf9869f575cc3',
    genesis: 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
};

const myAcc = false;

const getData = (url) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': myAcc ? apiKey.my : apiKey.genesis,
        },
    }).then((res) => res.json());

export default getData;
