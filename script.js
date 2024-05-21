// Replace {user-id} and {access-token} with actual values
window.addEventListener('load', getFollowersCount);
const userId = '@Cristiano';
const accessToken = '{access-token}';

let previousCount = 0;

function getFollowersCount() {
    fetch(`https://graph.facebook.com/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // const currentCount = data.summary.total_count;
            // console.log(`Current follower count: ${currentCount}`);

            // if (currentCount > previousCount) {
            //     console.log('Follower count is trending up');
            // } else if (currentCount < previousCount) {
            //     console.log('Follower count is trending down');
            // } else {
            //     console.log('Follower count is stable');
            // }

            // previousCount = currentCount;
        })
        .catch(error => {
            console.error('Error fetching follower count:', error);
        });
}
