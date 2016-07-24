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

export const get = (url) => {
  return request({
    url: url,
    method: 'GET',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {}
  });
};

export const destroy = (url) => {
  return request({
    url: url,
    method: 'DELETE',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': metaTagsManager.getCSRFToken()
    },
    data: {}
  });
};
