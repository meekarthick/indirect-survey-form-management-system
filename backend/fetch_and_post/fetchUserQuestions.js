import Questions from "../model/questionSchema.js"

const fetchUserQuestions = async (req,res) => {
    try {
        const {role,department} =  req.params

        
        if(role === "Student"  && !department || role === "Alumini" && !department){
            return res.status(400).json({error : "Department is mandatory"})
        }

        if(role === "Student"){
            
            const fetchedQuestions = await Questions.find(
                {
                    Role : role,
                   $or : [
                    {Type : { $in : ["Student Survey","Extra Curricular","CoCurricular"]}},
                    {Type : "Department specific", Department : department}
                   ]
                },
                {
                    Content  : 1,
                    id : 1,
                    Type : 1,
                    Department :1
                }
            )

            return res.status(200).json({questions : fetchedQuestions})
            
        }

        else if (role === "Alumini"){
            const fetchedQuestions = await Questions.find(
               {
                $or : [
                    {Role : role},
                    {Type : "Department specific", Department : department}
                ]
               },
                {
                    Content : 1,
                    id : 1,
                    Type : 1,
                    Department:1
                }
            )

            return res.status(200).json({questions : fetchedQuestions})
        }
        else{
            const fetchedQuestions = await Questions.find(
                {Role : role},
                {Content : 1, _id : 1}
            )


            return res.status(200).json({questions : fetchedQuestions})

        }

    } catch (error) {
        console.log(error.message)
    }
}

export default fetchUserQuestions;


