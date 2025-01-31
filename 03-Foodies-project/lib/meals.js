import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return db.prepare('SELECT * FROM meals').all();
}

export function getMealDetails(id) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            console.error('Error writing image', error);
            throw new Error('Error writing image');
        }
    });

    meal.image = `/images/${filename}`;
    const stmt = db.prepare(`
        INSERT INTO meals
          (title, summary, instructions, image, creator, creator_email, slug) 
        VALUES (
          @title,
          @summary,
          @instructions,
          @image,
          @creator,
          @creator_email,
          @slug
        )
    `);
    stmt.run(meal);
}
