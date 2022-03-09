require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1d" });
    },
    generateRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: "10d" });
    },
    sendRefreshToken: (res, refreshToken) => {
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
        });
    },
    sendAccessToken: (res, accessToken) => {
        res.json({ data: { accessToken }, message: "sent AccessToken successfully" });
    },
    resendAccessToken: (res, accessToken, data) => {
        res.json({ data: { accessToken, userInfo: data }, message: "resent AccessToken successfully" });
    },
    isAuthorized: (req) => {
        const authorization = req.headers["authorization"];
        console.log("auth: ", authorization);
        if (!authorization) {
            return null;
        }
        const token = authorization.split(" ")[1];
        try {
            return verify(token, process.env.ACCESS_SECRET);
        } catch (err) {
            // return null if invalid token
            return null;
        }
    },
    checkRefeshToken: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET);
        } catch (err) {
            // return null if refresh token is not valid
            return null;
        }
    },
};
