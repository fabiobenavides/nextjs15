

export async function getFeaturedEvents() {
    const EVENTS =  await getAllEvents();
    return EVENTS.filter((event) => event.isFeatured);
}
  
export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const EVENTS =  [];
    
    for (const key in data) {
        EVENTS.push({
            id: key,
            ...data[key]
        });
    }
    return EVENTS;
}

export async function getEventById(id) {
    const EVENTS =  await getAllEvents();
    return EVENTS.find((event) => event.id === id);
}