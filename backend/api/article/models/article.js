"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterFindOne(result, params, populate) {
        
      if (result) {
        strapi
          .query("article")
          .update({ id: params.id }, { views: parseInt(result.views) + 1 });
      }
    },
  },
};