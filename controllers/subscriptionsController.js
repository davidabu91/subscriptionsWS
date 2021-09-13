const express = require('express');

const subscriptionBL = require('../models/subscriptionsBL');

const router = express.Router();

router.route('/')
    .get(async function(req, resp) {
        let data = await subscriptionBL.getAll();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await subscriptionBL.getSubscription(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await subscriptionBL.addSubscription(obj);
            console.log('controleraddmovie', result);
        } catch (err) {
            return resp.json(err)
        }
    })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await subscriptionBL.updateSubscription(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await subscriptionBL.deleteSubscription(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


module.exports = router;