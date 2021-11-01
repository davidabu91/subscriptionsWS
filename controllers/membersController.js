const express = require('express');


const membersBL = require('../models/membersBL');

const router = express.Router();

router.route('/')
    .get(async function(req, resp) {
        let data = await membersBL.getAll();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await membersBL.getMember(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await membersBL.addMember(obj);
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await membersBL.updateMembers(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await membersBL.deleteMember(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })



router.route("/").delete(async function(req, res) {
    try {
        let result = await membersBL.deleteAllMembers();
        return res.json(result);
    } catch (err) {
        return res.json(err)
    }
});








module.exports = router;