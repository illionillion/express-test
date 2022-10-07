import Express from "express";

const router = Express.Router()
// router.set('view engine', 'ejs');

router.get('/', function(req, res) {
    res.render('pages/form', {"title": "お問合せフォーム","output":""});
});
router.post('/', function(req, res) {
    // console.log(req.body.username)
    console.log(req)
    console.log(req.body)
    res.render('pages/form', {"title": "お問合せフォーム","output": JSON.stringify(req.body)});
});

const formRouter = router
export default formRouter