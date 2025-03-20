import Alumini from "../model/aluminiSchema.js";
import generateTokenandSetcookie from "../utils/generateToken.js";

export const aluminiLogin = async (req, res) => {
    try {
        const { token } = req.body;

        const userResponseInfo = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const userInfo = await userResponseInfo.json();

        if (!userInfo.email) {
            return res.status(400).json({ message: "Invalid Google Token" });
        }

        if (userInfo.hd !== "bitsathy.ac.in") {
            return res.status(401).json({ error: "Unauthorized Access" });
        }

        const user = await Alumini.findOne({ Email: userInfo.email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        if (user.Role !== "Alumini") {
            return res.status(403).json({ error: "Access denied! Not an alumini." });
        }

        generateTokenandSetcookie(user, res);

        return res.status(200).json({
            id: user._id,
            name: user.Name,
            email: user.Email
        });

    } catch (error) {
        console.log("Alumini Login error", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};