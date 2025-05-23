import EventList from '../components/events/event-list';
import { useState, useEffect } from 'react';

function HomePage() {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/events.json')
            .then(response => response.json())
            .then(data => {
                const transformedEvents = [];
                for (const key in data) {
                    if (data[key].isFeatured) {
                        transformedEvents.push({
                            id: key,
                            title: data[key].title,
                            description: data[key].description,
                            location: data[key].location,
                            date: data[key].date,
                            image: data[key].image,
                            isFeatured: data[key].isFeatured
                        });
                    }
                }
                setFeaturedEvents(transformedEvents);
                setIsLoading(false);
            });
    }, []);

    if (isLoading || !featuredEvents) {
        return <p>Loading...</p>;
    }

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
