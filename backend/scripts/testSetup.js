console.log('Step 1: Testing basic require...');
const sqlite3 = require('sqlite3').verbose();
console.log('Step 2: SQLite3 loaded successfully');

console.log('Step 3: Testing path module...');
const path = require('path');
console.log('Step 4: Path module loaded successfully');

console.log('Step 5: Creating database path...');
const dbPath = path.join(__dirname, '../../database/pokedex.db');
console.log('Database path:', dbPath);

console.log('Step 6: Creating database connection...');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

console.log('Step 7: Testing database query...');
db.get('SELECT 1 as test', (err, row) => {
    if (err) {
        console.error('Query error:', err);
    } else {
        console.log('Query successful:', row);
    }
    db.close();
    console.log('Database closed');
});