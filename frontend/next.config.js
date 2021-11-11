module.exports = {
    publicRuntimeConfig: {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };