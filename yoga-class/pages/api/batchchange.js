import connectDB from '../../middleware/mongoose';

import User from '../../models/user';

const batchchange = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { email, batch } = req.body
    console.log(req.body)


    if (email && batch) {
      try {
        console.log(email)
        const savedUser = await User.findOne({ email: email })

        console.log(savedUser)
        // Create new user
        if (!savedUser) {
          return res.status(200).json({ msg: "Kindly register first",_id:"1" })
        }


        console.log("user exist")
        await User.findByIdAndUpdate(savedUser._id,
          { batch: batch },
          { new: true })

        console.log(savedUser)
        return res.status(200).json({ msg: " Batch Changed Sucessfully", _id:"2" });



      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(200).json({ msg: "Enter all the fields",_id:"1" })
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(batchchange);