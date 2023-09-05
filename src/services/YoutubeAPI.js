import axios from 'axios';

async function RelatedVideos(query) {
    const calling = false;
    if(calling) {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: process.env.REACT_APP_YOUTUBE_KEY,
                    part: 'snippet',
                    maxResults: 1,
                    q: query,
                    type: 'video',
                },
            });

            // Extract and return an array of video IDs from the response
            const videoIds = response.data.items.map((item) => ({
                videoId: item.id.videoId,
                title: item.snippet.title,
                postedDate: item.snippet.publishedAt,
                channelName: item.snippet.channelTitle,
            }));

            return videoIds;
        } catch (error) {
            console.error('Error fetching related videos:', error);
            return []; // Return an empty array in case of an error
        }
    }
}

export default RelatedVideos;
