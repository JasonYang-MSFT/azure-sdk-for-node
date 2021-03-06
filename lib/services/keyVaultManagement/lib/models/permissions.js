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
 * Initializes a new instance of the Permissions class.
 * @constructor
 * Permissions the identity has for keys, secrets and certificates.
 *
 * @member {array} [keys] Permissions to keys
 *
 * @member {array} [secrets] Permissions to secrets
 *
 * @member {array} [certificates] Permissions to certificates
 *
 */
class Permissions {
  constructor() {
  }

  /**
   * Defines the metadata of Permissions
   *
   * @returns {object} metadata of Permissions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Permissions',
      type: {
        name: 'Composite',
        className: 'Permissions',
        modelProperties: {
          keys: {
            required: false,
            serializedName: 'keys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          secrets: {
            required: false,
            serializedName: 'secrets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          certificates: {
            required: false,
            serializedName: 'certificates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Permissions;
