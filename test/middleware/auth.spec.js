/**
 * @file    Testing authentication
 */

// Dependencies
const request = require('supertest');
const { expect } = require('chai');
const server = require('../../index');

describe('Authentication testing: ', () => {
    it('should return a status of 200', () => {
        request(server)
            .get('/')
            .expect(200, (err, res) => {
                if (!err && res) {
                    expect(res.status).equal(200);
                } else {
                    throw Error(err);
                }
            });
    });
});
