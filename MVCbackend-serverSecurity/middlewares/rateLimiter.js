import rateLimit from "express-rate-limit";


const rateLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    standardHeaders: true,
    legacyHeaders: true,
    handler: (req, res, next, options) => {
        res.status(429).json({
            success: false,
            message: `Rate limit exceeded. Max ${options.max} requests per minute`,
            debug: {
                yourIp: req.ip,
                limit: options.max,
                windowMs: options.windowMs,
            },
        });
    },
});

export default rateLimiter;