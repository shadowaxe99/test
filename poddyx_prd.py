class PoddyX:
    def __init__(self):
        self.podcasts = []

    def add_podcast(self, podcast):
        self.podcasts.append(podcast)

    def search_podcasts(self, keyword):
        results = []
        for podcast in self.podcasts:
            if keyword.lower() in podcast.title.lower() or keyword.lower() in podcast.genre.lower() or keyword.lower() in podcast.host.lower():
                results.append(podcast)
        return results

    def get_recommendations(self, user):
        recommendations = []
        # Logic to generate personalized recommendations
        for podcast in self.podcasts:
            # Add logic to generate recommendations based on user preferences and listening history
            recommendations.append(podcast)
        return recommendations


class Podcast:
    def __init__(self, title, genre, host):
        self.title = title
        self.genre = genre
        self.host = host


if __name__ == '__main__':
    poddyx = PoddyX()

    # Add podcasts
    podcast1 = Podcast('Podcast 1', 'Technology', 'John Doe')
    podcast2 = Podcast('Podcast 2', 'Comedy', 'Jane Smith')

    poddyx.add_podcast(podcast1)
    poddyx.add_podcast(podcast2)

    # Search for podcasts
    results = poddyx.search_podcasts('technology')
    for podcast in results:
        print(podcast.title)

    # Get personalized recommendations
    user = 'example_user'
    recommendations = poddyx.get_recommendations(user)
    for podcast in recommendations:
        print(podcast.title)
