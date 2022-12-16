
import Batch from '../../models/batch'

import connectDB from '../../middleware/mongoose';

import User from '../../models/user';

const payment = async (req, res) => {
    if (req.method === 'POST') {
        // Check if name, email or password is provided
        const { amount, email } = req.body
        console.log("hi")
        console.log(req.body)


        if (amount && email) {
            try {
                console.log(email)
                const savedUser = await User.findOne({ email: email })

                console.log(savedUser)
                // Create new user
                if (!savedUser) {
                    return res.status(422).json({ error: "Kindly register first" })
                }


                await User.findByIdAndUpdate(savedUser._id,
                    { $inc: { "dueFee": -500 } },
                    null)

                console.log("user exist")

                const savedBatch = await Batch.findOne({ time: savedUser.batch })
                console.log(savedBatch)
                if (!savedBatch) {
                    var batch = new Batch({ time: savedUser.batch, profit: 500 });
                    await batch.save()
                    return res.status(200).json({ msg:"Payment Successfyll",_id:"2"  });
                }

                console.log("batch exist")
                await Batch.findByIdAndUpdate(savedBatch._id,
                    { $inc: { profit: 500 } },
                    null)

                console.log(savedBatch)
                return res.status(200).json({ msg: "Payment Successfyll",_id:"2" });



            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(200).json({msg:'Enter complete Payment Details',_id:"1"});
        }
    } else {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(payment);