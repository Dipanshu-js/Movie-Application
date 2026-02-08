import { Client, TablesDB, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
// ⚠️ change from COLLECTION_ID → TABLE_ID in .env

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // your region
  .setProject(PROJECT_ID);

const tablesDB = new TablesDB(client);
console.log(tablesDB);

// 🔥 Update search count or create new row
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 1. Check if search term exists
    const result = await tablesDB.listRows(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);
    console.log(result);

    // 2. If exists → update count
    if (result.rows.length > 0) {
      const row = result.rows[0];

      await tablesDB.updateRow(DATABASE_ID, TABLE_ID, row.$id, {
        count: row.count + 1,
      });
    } else {
      // 3. If not exists → create new row
      await tablesDB.createRow(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Appwrite Error:", error);
  }
};

// 🔥 Get trending movies
export const getTrendingMovies = async () => {
  try {
    const result = await tablesDB.listRows(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.rows;
  } catch (error) {
    console.error("Trending Error:", error);
    return [];
  }
};
