import Express from "express";

const router = Express.Router()
// router.set('view engine', 'ejs');

router.get('/', function(req, res) {
    res.render('pages/about', {"name": "about"});
});

const aboutRouter = router
export default aboutRouter