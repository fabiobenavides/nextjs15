

export async function getFeaturedEvents() {
    const events =  await getAllEvents();
    return events.filter((event) => event.isFeatured);
}
  
export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-f2ad5-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events =  [];
    
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}

export async function getEventById(id) {
    const events =  await getAllEvents();
    return events.find((event) => event.id === id);
}