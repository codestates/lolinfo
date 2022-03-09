const { User } = require("../../models/index");
const makePasswordHashed = require("../../modules/makePasswordHashed");

module.exports = {
    delete: (req, res) => {
        if (req.body.email === undefined || req.body.password === undefined) {
            return res.status(400).send('Not Enough Data');
        }
        const { email, password } = req.body;
        //암호화 코드 작성
        const findPassword = await makePasswordHashed(email, password);
        if (findPassword === undefined) {
            return res.status(401).send("please check your email or password again");
        }
        const Value = await User.findOne({
            where: {
                email: email,
                password: findPassword,
            },
        });
        if (!Value) {
            // cant find
            return res.status(401).send("please check your email or password again");
        }
        await User.destroy({ where: { email: email } });
        res.status(204).send('Deleted your Id!');
    },
};
