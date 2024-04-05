import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";
import generateTokenAndSendCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password don't match" })
    }

    const user = await User.findOne({ userName })

    if (user) {
      return res.status(400).json({ error: "User already exists" })
    }

    // HASH PASSWORD HERE 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt)

    // profile pic url

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if (newUser) {
      // Generate JWT token here
      generateTokenAndSendCookie(newUser._id, res)
      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic
      })
    } else {
      res.status(400).json({error: "Invalid user data"})
    }

  } catch (error) {
    console.log("Error in signup controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const login = async (req, res) => {
  try {

  } catch (error) {

  }
}

export const logout = (req, res) => {
  res.send("logout user")
}