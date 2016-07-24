'use strict';

import request from 'axios';
import metaTagsManager from './meta_tags_manager';

export const post = (url, params) => {
  return request({
    url: url,
    method: 'POST',
    responseType: 'json',
    headers: {
      'X-CSRF-Token': metaTagsManager.getCSRFToken(),
    },
    data: params
  });
};
