/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceKeys class.
 * @constructor
 * The response body for a ListKeys API.
 *
 * @member {string} [primaryAuthEndpoint] The primary authorization endpoint.
 *
 * @member {string} [secondaryAuthEndpoint] The secondary authorization
 * endpoint.
 *
 * @member {string} [primaryKey] The primary key for the Media Service
 * resource.
 *
 * @member {string} [secondaryKey] The secondary key for the Media Service
 * resource.
 *
 * @member {string} [scope] The authorization scope.
 *
 */
class ServiceKeys {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceKeys
   *
   * @returns {object} metadata of ServiceKeys
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceKeys',
      type: {
        name: 'Composite',
        className: 'ServiceKeys',
        modelProperties: {
          primaryAuthEndpoint: {
            required: false,
            serializedName: 'primaryAuthEndpoint',
            type: {
              name: 'String'
            }
          },
          secondaryAuthEndpoint: {
            required: false,
            serializedName: 'secondaryAuthEndpoint',
            type: {
              name: 'String'
            }
          },
          primaryKey: {
            required: false,
            serializedName: 'primaryKey',
            type: {
              name: 'String'
            }
          },
          secondaryKey: {
            required: false,
            serializedName: 'secondaryKey',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceKeys;
