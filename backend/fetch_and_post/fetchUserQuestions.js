import StudentQuestion from "../model/studentQueSchema.js";
import AlumniQuestion from "../model/alumniQueSchema.js";
import ParentQuestion from "../model/parentQueSchema.js";
import EmployerQuestion from "../model/employerQueSchema.js";

const mapModels = {
   studentquestions: { model: StudentQuestion },
   parentquestions: { model: ParentQuestion },
   employerquestions: { model: EmployerQuestion },
   alumniquestions: { model: AlumniQuestion }
}

export const fetchQuestions = async (req, res) => {
   try {
      const { role, department } = req.params

      const roleConfig = mapModels[role]

      //if role is missing or not present
      if (role === "studentquestions" && (!department || typeof (department) !== 'string' || department.trim() === ' ')) {
         return res.status(400).json({ error: "Missing department" });
      }

      let questArray = []

      if (role === "studentquestions") {
         const studFetchedQuestions = await roleConfig.model.find({
            $or: [
               { $and: [{ category: "DepartmentSpecific" }, { department: department }] },
               { category: "Core" },
               { category: "ExtraCurricular" },
               { category: "CoCurricular" }
            ]
         })

         if (!studFetchedQuestions.length) {
            return res.status(404).json({ message: "No Data Found" })
         }

         questArray = studFetchedQuestions.map(doc => doc.question);
      }
      else {
         //other User Question Fetching

         const fetchedQues = await roleConfig.model.find().sort({ pointNumber: 1 }).select('question')

         if (!fetchedQues.length) {
            res.status(404).json({ message: "No Data Found" })
         }

         questArray = fetchedQues.map(doc => doc.question)

         //if department parameter exists  in the URL then fetching dep specific questions for ALUMNI

         if (role === 'alumniquestions' && department) {
            const fetchDepQuestion = await StudentQuestion.find(
               {
                  category: 'DepartmentSpecific',
                  department: department
               }
            )
            // concating the depquestions to the quest array if available
            const depquestArray = fetchDepQuestion.map(doc => doc.question)

            if (depquestArray.length) {
               questArray = [...questArray, ...depquestArray]
            }
         }

      }
       res.status(200).json({ questions: questArray });
   }
   
   catch (error) {
      return res.status(500).json({ error: "Internal Server Error" })
   }
}