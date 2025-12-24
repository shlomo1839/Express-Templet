import express from 'express';
import genericRoutes from './routes/generic.js';

const app = express();
const PORT = 3000;

app.use(express.json());

/* 
   STEP 1: Register your routes here. 
   Replace 'generic' with your specific entity name (e.g., 'items', 'tasks').
*/
app.use('/api/resource', genericRoutes);

app.get('/health', (req, res) => res.json({ status: 'server is running' }));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
