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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AutoscaleNotification class.
 * @constructor
 * Autoscale notification.
 *
 * @member {object} [email] the email notification.
 * 
 * @member {boolean} [email.sendToSubscriptionAdministrator] a value
 * indicating whether to send email to subscription administrator.
 * 
 * @member {boolean} [email.sendToSubscriptionCoAdministrators] a value
 * indicating whether to send email to subscription co-administrators.
 * 
 * @member {array} [email.customEmails] the custom email list.
 * 
 * @member {array} [webhooks] the collection of webhook notifications.
 * 
 */
function AutoscaleNotification() {
}

/**
 * Defines the metadata of AutoscaleNotification
 *
 * @returns {object} metadata of AutoscaleNotification
 *
 */
AutoscaleNotification.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AutoscaleNotification',
    type: {
      name: 'Composite',
      className: 'AutoscaleNotification',
      modelProperties: {
        operation: {
          required: true,
          isConstant: true,
          serializedName: 'operation',
          defaultValue: 'Scale',
          type: {
            name: 'String'
          }
        },
        email: {
          required: false,
          serializedName: 'email',
          type: {
            name: 'Composite',
            className: 'EmailNotification'
          }
        },
        webhooks: {
          required: false,
          serializedName: 'webhooks',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'WebhookNotificationElementType',
                type: {
                  name: 'Composite',
                  className: 'WebhookNotification'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = AutoscaleNotification;