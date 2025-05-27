const EVENTS = [];

export async function getFeaturedEvents() {
    if (EVENTS.length === 0) {
        await getAllEvents();
    }
    return EVENTS.filter((event) => event.isFeatured);
}
  
export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    
    for (const key in data) {
        EVENTS.push({
            id: key,
            ...data[key]
        });
    }
    return EVENTS;
}

export async function getEventById(id) {
    if (EVENTS.length === 0) {
        await getAllEvents();
    }
    return EVENTS.find((event) => event.id === id);
  }