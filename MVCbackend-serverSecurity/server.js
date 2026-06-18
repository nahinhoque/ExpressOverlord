import express from 'express';
import logger from './middlewares/logger.js';
import userRoutes from './routes/userRoutes.js';
import rateLimiter from './middlewares/rateLimiter.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());
app.use(logger);
app.use(rateLimiter);

const PORT = process.env.PORT || 4000;

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});