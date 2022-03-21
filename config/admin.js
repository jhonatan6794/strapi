module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1786f0e6f4dd3d52a86a67dcf379b4be'),
  },
});
