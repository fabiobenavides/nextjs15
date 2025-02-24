export function GET(request) {
    console.log(request);

    return new Response('Hello Get!');
}

export function POST(request) {
    console.log(request);

    return new Response('Hello Post!');
}