import Responses from "../model/responseSchema.js";

export const sumbmitResponse = async (req, res) => {
    try {
        const response = req.body

        if (!Array.isArray(response) || response.length === 0) {
            return res.status(400).json({ message: "Invalid input: Responses must be an array" });
        }


        for (let responses of response) {

            const { User, Question, Answers } = responses;

            if (!User || !Question || !Answers) {
                return res.status(400).json({ message: "All fields are required for each response" });
            }

            if (![1, 2, 3, 4, 5].includes(Answers)) {
                return res.status(400).json({ message: "Answer must be between 1 and 5" });
            }
            const isExistingResponse = await Responses.findOne({ User: User, Question: Question });

            if (isExistingResponse) {
                return res.status(400).json({ message: "Duplicate Entry: User has already answered this question" });
            }
            
        }

        await Responses.insertMany(response)

        return res.status(201).json({ message: "Submitted Successfully" })

    } catch (error) {

        console.log(error.message)
        return res.status(500).json({ message: error.message })

    }
}


