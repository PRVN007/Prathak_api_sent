function getMapData()
{

    let status;
    fetch('https://api.stackexchange.com/2.0/questions?page=1&pagesize=30&key=VVq3kJHSjQ*7qgpiRaVoLA%28%28&site=stackoverflow')
            .then((res) => {


                return res.json()
            })
            .then((jsonData) => {
                console.log(jsonData.items);
                var newData = jsonData.items;
                newData.forEach(function (entry) {
                    console.log(entry.owner.user_id);
                    userid = entry.owner.user_id;
                    user_type = entry.owner.user_type;
                    console.log(entry.owner.user_type);

                });
            })
            .catch((err) => {
                // handle error
                console.error(err);
            });
}
