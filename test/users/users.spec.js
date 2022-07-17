/**
 * @file    USERS - Test file
 */

// Dependencies
const { expect } = require('chai');
const request = require('supertest');
const server = require('../../index');

describe('Users: ', () => {
    it("should return a user's list of size greater than 0", async () => {
        // Mock the find to be a function that returns a list of users
        request(server)
            .get('/api/users')
            .expect(200, (err, data) => {
                if (!err && data) {
                    expect(res.body.length).greaterThan(0);
                } else throw Error(err);
            });
    });
});
