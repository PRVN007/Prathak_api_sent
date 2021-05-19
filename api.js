fetch('https://api.stackexchange.com/2.0/questions?page=1&pagesize=30&key=VVq3kJHSjQ*7qgpiRaVoLA%28%28&site=stackoverflow')
.then(res => res.json())
.then(res => {
    res.data.map(user => {
console.log(`${user_id}: ${user_type} ${profile_image} ${display_name}`);
    });
});