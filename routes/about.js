import Express from "express";

const router = Express.Router()
// router.set('view engine', 'ejs');

const data_list = ["one", "tow", "three", "four", "five"]

router.get('/', function(req, res) {
    res.render('pages/about', {"name": data_list});
});

const aboutRouter = router
export default aboutRouter