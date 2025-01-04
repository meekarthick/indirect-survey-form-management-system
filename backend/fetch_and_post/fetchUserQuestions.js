import StudentQuestion from "../model/studentQueSchema.js";
import AlumniQuestion from "../model/alumniQueSchema.js";
import ParentQuestion from "../model/parentQueSchema.js";
import EmployerQuestion from "../model/employerQueSchema.js";

const mapModels = {
   studentquestions : {model : StudentQuestion},
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

      console.log("Role : " + role);

      if (role === "studentquestions") {
         try {
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

            return res.status(200).json({ studQuestions: studFetchedQuestions })

         } catch (error) {
            console.log(error.message);

            return res.status(500).json({ error: "Internal Server Error" })
         }
      }

      const fetchedQues = await roleConfig.model.find().sort({ pointNumber: 1 }).select('question')

      if (!fetchedQues.length) {
         return res.status(404).json({ message: "No Data Found" })
      }

      const questArray = fetchedQues.map(doc => doc.question)

      return res.status(200).send(questArray)
   }

   catch (error) {
      console.log(error.message)
      return  res.status(500).json({error:"Internal Server Error"})
   }
}