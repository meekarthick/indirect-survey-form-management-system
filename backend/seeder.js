import mongoose from "mongoose";
import connectToMongoDB from "./mongoDB/connect.js"
import Questions from "./model/questionSchema.js";


// seeding questions


// student questions



const question = [
    {
        Content: "Interaction with the Department",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Improvement in technical knowledge, soft skills, ethics and morality",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Faculty members, technical and non-technical staff members are cooperative",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Counseling and guidance",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Class room and Laboratory facilities",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "ICT facilities",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Learning center facilities",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Transport facilities",
        Role: "Parent",
        Type: "Parent Survey"
    },
    {
        Content: "Hostel, Mess & Cafeteria facilities",
        Role: "Parent",
        Type: "Parent Survey"
    },

    //department specific
    {
        Content: "To focus on healthcare engineering that includes the study and understanding of biological systems",
        Category: "Engineering Knowledge",
        Department: "Biomedical",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "To emphasize quantitative analysis and directly tying concepts with healthcare and diagnostics",
        Category: "Problem Analysis",
        Department: "Biomedical",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Practice professionally as biomedical engineers and/or biomedical scientists in the field of health care sector for the wellbeing of humankind",
        Category: "Ethics",
        Department: "Biomedical",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Build careers addressing human health problems within a multidisciplinary, global industry",
        Category: "Life-long Learning",
        Department: "Biomedical",
        Role: "Student",
        Type: "Department specific"
    },
    //bio tech
    {
        Content: "To maintain high standards of teaching through innovative pedagogy for enabling students to be lifelong learners and globally competent professionals",
        Category: "Life-long Learning",
        Department: "Biotechnology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "To foster creativity through innovation-based research activities for upliftment of self and society promoting socio-economic growth",
        Category: "Environment and Sustainability",
        Department: "Biotechnology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "To inculcate professional ethics and skills amongst the graduates and empowering them to have career advancement through placements, higher studies, and entrepreneurs",
        Category: "Ethics",
        Department: "Biotechnology",
        Role: "Student",
        Type: "Department specific"
    },
    // aero
    {
        Content: "Utilize the knowledge of Aeronautical engineering in innovative, dynamic and challenging environment for design and development of new products",
        Category: "Design/ Development of Solutions",
        Department: "Aeronautical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Impart professional skills through simulation, language skills and general purpose CAE packages to solve practical problems of components in design and analysis to meet the airworthiness requirements for flight vehicles",
        Category: "Modern Tool Usage",
        Department: "Aeronautical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Fabricate, test and develop the products with more innovative technologies",
        Category: "Conduct Investigations of Complex Problems",
        Department: "Aeronautical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    // agri 
    {
        Content: "Model, design and analyze agricultural machineries and implement to increase productivity, improve land use and conserve resources like seed, water, fertilizer, pesticide, and fuel",
        Category: "Design/ Development of Solutions",
        Department: "Agricultural Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "To improvise better ways to minimize the crop loss from field damage during postharvest management and energy utilization, sorting, processing and packaging",
        Category: "Environment and Sustainability",
        Department: "Agricultural Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //AIDS
    {
        Content: "Ability to design and develop Artificial Intelligence algorithms, tools and techniques for solving real-world problems",
        Category: "Problem Analysis",
        Department: "Artificial Intelligence and Datascience",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Ability to identify and use appropriate analytical tools and techniques on massive datasets to extract information",
        Category: "Modern Tool Usage",
        Department: "Artificial Intelligence and Datascience",
        Role: "Student",
        Type: "Department specific"
    },
    //AIML
    {
        Content: "Develop models in Data Science, Machine Learning, deep learning and Big Data technologies, using AI and modern tools",
        Category: "Modern Tool Usage",
        Department: "Artificial Intelligence and Machine Learning",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Formulate solutions for interdisciplinary AI problems through acquired programming knowledge in the respective domains fulfilling real-time constraints",
        Category: "Problem Analysis",
        Department: "Artificial Intelligence and Machine Learning",
        Role: "Student",
        Type: "Department specific"
    },
    //auto
    {
        Content: "An ability to design, analyze and find the solutions for automotive related problems",
        Category: "Design/ Development of Solutions",
        Department: "Automobile Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "An ability to use computer knowledge, IT for designing and improving the performance of automobiles",
        Category: "Modern Tool Usage",
        Department: "Automobile Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //civil
    {
        Content: "Apply technical skills and modern engineering tools with critical thinking and innovations for solving civil engineering problems",
        Category: "Engineering Knowledge",
        Department: "Civil Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Design sustainable and smart infrastructure in the context of environmental, economic, and societal requirements and serve the community as ethical and responsible professionals",
        Category: "Environment and Sustainability",
        Department: "Civil Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //csbs
    {
        Content: "To demonstrate the technical knowledge in Computer Science with equal appreciation of humanities, management sciences, and human values",
        Category: "Engineering Knowledge",
        Department: "Computer Science and Business Systems",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "To create, select, and apply appropriate techniques, resources, modern engineering, and business tools including prediction and data analytics to complex engineering activities and business solutions",
        Category: "Modern Tool Usage",
        Department: "Computer Science and Business Systems",
        Role: "Student",
        Type: "Department specific"
    },
    //csd
    {
        Content: "Apply the skill of design and creative thinking to provide digital solutions to modern and complex engineering problems",
        Category: "Engineering Knowledge",
        Department: "Computer Science and Design",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Apply the power of computing and digital media tools to provide solutions to challenging interactive technologies",
        Category: "Modern Tool Usage",
        Department: "Computer Science and Design",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Acquire knowledge in diverse areas of Computer Science and Design to promote skills essential for career, entrepreneurship, and higher studies",
        Category: "Engineering Knowledge",
        Department: "Computer Science and Design",
        Role: "Student",
        Type: "Department specific"
    },
    //cse
    {
        Content: "Apply suitable algorithmic thinking and data management practices to design, develop, and evaluate effective solutions for real-life and research problems",
        Category: "Engineering Knowledge",
        Department: "Computer Science and Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Design and develop cost-effective solutions based on cutting-edge hardware and software tools and techniques to meet global requirements",
        Category: "Modern Tool Usage",
        Department: "Computer Science and Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //ct
    {
        Content: "Design and develop cost-effective solutions based on cutting-edge hardware and software tools and techniques to meet global requirements",
        Category: "Modern Tool Usage",
        Department: "Computer Technology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Develop practical competencies in Software and Hardware Design",
        Category: "Design/ Development of Solutions",
        Department: "Computer Technology",
        Role: "Student",
        Type: "Department specific"
    },
    // eee
    {
        Content: "Modeling, design, and analysis of Electrical & Electronic Systems using design principles and software tools",
        Category: "Engineering Knowledge",
        Department: "Electrical and Electronics Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Develop electrical machinery/Appliances for various domestic and industrial needs",
        Category: "Design/ Development of Solutions",
        Department: "Electrical and Electronics Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //ece
    {
        Content: "Able to apply the concepts of Electronics, Communication, Signal processing, and VLSI in the design and implementation of application-oriented engineering systems",
        Category: "Engineering Knowledge",
        Department: "Electronics and Communication Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Able to solve complex engineering problems using state-of-the-art hardware and software tools, along with analytical and managerial skills to arrive at appropriate solutions",
        Category: "Design/ Development of Solutions",
        Department: "Electronics and Communication Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //eee
    {
        Content: "Identify suitable sensors and design signal conditioning circuits to measure physical parameters for industrial applications",
        Category: "Engineering Knowledge",
        Department: "Electronics and Instrumentation Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Design, develop, and realize advanced control schemes in different platforms such as microcontroller, PLC, SCADA, DCS, and other modern controllers for next level of automation",
        Category: "Design/ Development of Solutions",
        Department: "Electronics and Instrumentation Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //fashion
    {
        Content: "Interpret trends, decipher fashion movements, apply the knowledge of elements of design and Gestalt theory of visual perception, and incorporate sustainable decisions into their design artworks, fashion products, and accessories",
        Category: "Engineering Knowledge",
        Department: "Fashion Technology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Articulate design aesthetics, communicate product values, collaborate across disciplines as member and leader; and envision solutions in fashion systems: design, technology, production, and management",
        Category: "Design/ Development of Solutions",
        Department: "Fashion Technology",
        Role: "Student",
        Type: "Department specific"
    },
    //food
    {
        Content: "Students will be able to conduct innovative and high-quality research to solve emerging problems in food technology by applying scientific knowledge",
        Category: "Conduct Investigations of Complex Problems",
        Department: "Food Technology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Practical and research training imparted to the students will pave the way for introducing novel technologies in food processing sectors for global sustenance",
        Category: "Environment and Sustainability",
        Department: "Food Technology",
        Role: "Student",
        Type: "Department specific"
    },
    //ISE
    {
        Content: "Design and develop cost-effective, secure, reliable IT, network, and web-based solutions with professional expertise in the domains including banking and healthcare and communications",
        Category: "Design/ Development of Solutions",
        Department: "Information Science and Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Demonstrate and develop applications on data analysis",
        Category: "Design/ Development of Solutions",
        Department: "Information Science and Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    // IT
    {
        Content: "Design and develop cost-effective, secure, reliable IT, network, and web-based solutions with professional expertise in the domains including banking and healthcare and communications",
        Category: "Design/ Development of Solutions",
        Department: "Information Technology",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Demonstrate and develop applications on data analysis",
        Category: "Design/ Development of Solutions",
        Department: "Information Technology",
        Role: "Student",
        Type: "Department specific"
    },
    // mechanical
    {
        Content: "Design, analyze, and evaluate the performance of mechanical systems",
        Category: "Design/ Development of Solutions",
        Department: "Mechanical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Choose the appropriate methodology, materials, tools, and machinery to manufacture quality products at affordable cost",
        Category: "Modern Tool Usage",
        Department: "Mechanical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Address all the fluid flow and energy transfer related problems of mechanical systems",
        Category: "Engineering Knowledge",
        Department: "Mechanical Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    //mechatronics
    {
        Content: "Analyze, design, and develop electromechanical systems using contemporary tools",
        Category: "Problem Analysis",
        Department: "Mechatronics Engineering",
        Role: "Student",
        Type: "Department specific"
    },
    {
        Content: "Select sensors and controllers to develop and implement automation techniques for solving real-world interdisciplinary engineering problems",
        Category: "Design/ Development of Solutions",
        Department: "Mechatronics Engineering",
        Role: "Student",
        Type: "Department specific"
    },

    // core questions 
    {
        Content : "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems",
        Category : "Engineering Knowledge",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Identify, formulate, research literature and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences",
        Category : "Problem Analysis",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations",
        Category : "Design/ Development of Solutions",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Investigate complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of information to provide valid conclusions",
        Category : "Conduct Investigations of Complex Problems",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations",
        Category : "Modern Tool Usage",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice",
        Category : "The Engineer and Society",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development",
        Category : "Environment and Sustainability",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice",
        Category : "Ethics",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings",
        Category : "Individual and Team Work",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions",
        Category : "Communication",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments",
        Category : "Project Management and Finance",
        Role : "Student",
        Type : "Student Survey"
    },
    {
        Content : "Recognize the need for and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change",
        Category : "Life-long Learning",
        Role : "Student",
        Type : "Student Survey"
    },
    // co curricular
    {
        Content : "Ability to implement ideas as a team and make it into a workable product",
        Category : "Design/ Development of Solutions",
        Role : "Student",
        Type : "CoCurricular"
    },
    {
        Content : "Ability to communicate the right solutions effectively in the form of reports, presentations with its possibility of getting deployed",
        Category : "Communication",
        Role : "Student",
        Type : "CoCurricular"
    },
    {
        Content : "Ability to write papers in standard format for journals",
        Category : "Conduct Investigations of Complex Problems",
        Role : "Student",
        Type : "CoCurricular"
    },
    {
        Content : "Ability to organize events as a member or leader",
        Category : "Individual and Team Work",
        Role : "Student",
        Type : "CoCurricular"
    },
    {
        Content : "Ability to deliver ideas effectively in a public forum",
        Category : "Communication",
        Role : "Student",
        Type : "CoCurricular"
    },
    {
        Content : "Ability to compete with others in events",
        Category : "Project Management and Finance",
        Role : "Student",
        Type : "CoCurricular"
    },
    
    // extra curricular 
    {
        Content : "Ability to organize events as a leader or volunteer",
        Category : "Engineering Knowledge",
        Role : "Student",
        Type : "Extra Curricular"
    },
    {
        Content : "Ability to expose talent as a group or individual in state-level, national-level, or international-level events",
        Category : "Problem Analysis",
        Role : "Student",
        Type : "Extra Curricular"
    },
    {
        Content : "Ability to participate in events which lead way to participate in next higher-level events",
        Category : "Design/ Development of Solutions",
        Role : "Student",
        Type : "Extra Curricular"
    },
    {
        Content : "Ability to continue and gain expertise in the field of your interest",
        Category : "Conduct Investigations of Complex Problems",
        Role : "Student",
        Type : "Extra Curricular"
    },

    // alumini

    {
        Content : "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems",
        Category : "Engineering Knowledge",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Identify, formulate, research literature and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences",
        Category : "Problem Analysis",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations",
        Category : "Design/ Development of Solutions",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Investigate complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of information to provide valid conclusions",
        Category : "Conduct Investigations of Complex Problems",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations",
        Category : "Modern Tool Usage",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice",
        Category : "The Engineer and Society",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development",
        Category : "Environment and Sustainability",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice",
        Category : "Ethics",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary setting",
        Category : "Individual and Team Work",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions",
        Category : "Communication",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Demonstrate knowledge and understanding of engineering and management principles and apply these to one‟s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments",
        Category : "Project Management and Finance",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    {
        Content : "Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change",
        Category : "Life-long Learning",
        Role : "Alumini",
        Type : "Alumini Survey"
    },
    //employer
    {
        Content : "Problem Solving / Programming Skill",
        Category : "Problem Analysis",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Critical Thinking/Analytical Skill",
        Category :"Conduct Investigations of Complex Problems",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Ability to design and develop solutions with a comprehension of the design trade-offs involved",
        Category : "Design/ Development of Solutions",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Knowledge about contemporary fields",
        Category : "Modern Tool Usage",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "System Engineering Skills (for building Hardware/Software/Products/Designs)",
        Category : "Design/ Development of Solutions",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Exposure to the impact of Information and Communication Technology (ICT) solutions on the environment and Society",
        Category : "The Engineer and Society",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Knowledge of sustainable product development",
        Category : "Environment and Sustainability",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Ethical Conduct/Ethical behaviour",
        Category : "Ethics",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Coordination and collaboration",
        Category : "Individual and Team Work",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Communication",
        Category : "Communication",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Project management Skills",
        Category : "Project Management and Finance",
        Role : "Employer",
        Type : "Employer Survey"
    },
    {
        Content : "Life Skills (Time management and Prioritization)",
        Category : "Life-long Learning",
        Role : "Employer",
        Type : "Employer Survey"
    },

]



const ensureMongoDBConnection = async () => {

    if (mongoose.connection.readyState === 0) { // 0 means disconnected
        console.log("Mongoose is not connected. Reconnecting...");
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } else {
        console.log("Mongoose is already connected.");
    }
};


const insertQuestions = async () => {
    try {

        await connectToMongoDB();

        // Insert Parent Questions
        // await ParentQuestion.insertMany(parentQuestions);
        // console.log('Parent questions inserted successfully.');

        // // Insert Employer Questions
        // await EmployerQuestion.insertMany(employerQuestions);
        // console.log('Employer questions inserted successfully.');

        // // Insert Alumni Questions
        // await AlumniQuestion.insertMany(alumniQuestions);
        // console.log('Alumni questions inserted successfully.');

        // // Insert Core Student Questions
        // await StudentQuestion.insertMany(coreQuestions);
        // console.log('Core student questions inserted successfully.');

        // // Insert Co-Curricular Questions
        // await StudentQuestion.insertMany(coCurricularQuestions);
        // console.log('Co-curricular student questions inserted successfully.');

        // // // Insert Extra-Curricular Questions
        // await StudentQuestion.insertMany(extraCurricularQuestions);
        // console.log('Extra-curricular student questions inserted successfully.');

        // // Insert Department-Specific Questions
        // await StudentQuestion.insertMany(departmentSpecificQuestions);
        // console.log('Department-specific questions inserted successfully.');

        await Questions.insertMany(question);
        console.log("Inserted Successfully");
        

    } catch (error) {
        console.error('Error inserting questions:', error.message);
    }
};

// Run the function to insert questions
insertQuestions();





// const employerQuestions = [
//     {
//         pointNumber: 1,
//         question: "Problem Solving / Programming Skill"
//     },
//     {
//         pointNumber: 2,
//         question: "Critical Thinking/Analytical Skill"
//     },
//     {
//         pointNumber: 3,
//         question: "Ability to design and develop solutions with a comprehension of the design trade-offs involved"
//     },
//     {
//         pointNumber: 4,
//         question: "Knowledge about contemporary fields"
//     },
//     {
//         pointNumber: 5,
//         question: "System Engineering Skills (for building Hardware/Software/Products/Designs)"
//     },
//     {
//         pointNumber: 6,
//         question: "Exposure to the impact of Information and Communication Technology (ICT) solutions on the environment and Society"
//     },
//     {
//         pointNumber: 7,
//         question: "Knowledge of sustainable product development"
//     },
//     {
//         pointNumber: 8,
//         question: "Ethical Conduct/Ethical behaviour"
//     },
//     {
//         pointNumber: 9,
//         question: "Coordination and collaboration"
//     },
//     {
//         pointNumber: 10,
//         question: "Communication"
//     },
//     {
//         pointNumber: 11,
//         question: "Project management Skills"
//     },
//     {
//         pointNumber: 12,
//         question: "Life Skills (Time management and Prioritization)"
//     }
// ];






// const alumniQuestions = [
//     {
//         pointNumber: 1,
//         question: "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems"
//     },
//     {
//         pointNumber: 2,
//         question: "Identify, formulate, research literature and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences"
//     },
//     {
//         pointNumber: 3,
//         question: "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations"
//     },
//     {
//         pointNumber: 4,
//         question: "Investigate complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of information to provide valid conclusions"
//     },
//     {
//         pointNumber: 5,
//         question: "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations"
//     },
//     {
//         pointNumber: 6,
//         question: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice"
//     },
//     {
//         pointNumber: 7,
//         question: "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development"
//     },
//     {
//         pointNumber: 8,
//         question: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice"
//     },
//     {
//         pointNumber: 9,
//         question: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings"
//     },
//     {
//         pointNumber: 10,
//         question: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions"
//     },
//     {
//         pointNumber: 11,
//         question: "Demonstrate knowledge and understanding of engineering and management principles and apply these to one‟s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments"
//     },
//     {
//         pointNumber: 12,
//         question: "Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change"
//     }
// ];









// const coreQuestions = [
//     { question: "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.", category: "Core", pointNumber: 1 },
//     { question: "Identify, formulate, research literature and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.", category: "Core", pointNumber: 2 },
//     { question: "Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal and environmental considerations.", category: "Core", pointNumber: 3 },
//     { question: "Investigate complex problems using research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of information to provide valid conclusions.", category: "Core", pointNumber: 4 },
//     { question: "Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.", category: "Core", pointNumber: 5 },
//     { question: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice.", category: "Core", pointNumber: 6 },
//     { question: "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development.", category: "Core", pointNumber: 7 },
//     { question: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.", category: "Core", pointNumber: 8 },
//     { question: "Function effectively as an individual, and as a member or leader in diverse teams and in multi-disciplinary settings.", category: "Core", pointNumber: 9 },
//     { question: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.", category: "Core", pointNumber: 10 },
//     { question: "Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.", category: "Core", pointNumber: 11 },
//     { question: "Recognize the need for and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.", category: "Core", pointNumber: 12 }
// ];





// const coCurricularQuestions = [
//     { question: "Ability to implement ideas as a team and make it into a workable product.", category: "CoCurricular", pointNumber: 1 },
//     { question: "Ability to communicate the right solutions effectively in the form of reports, presentations with its possibility of getting deployed.", category: "CoCurricular", pointNumber: 2 },
//     { question: "Ability to write papers in standard format for journals.", category: "CoCurricular", pointNumber: 3 },
//     { question: "Ability to organize events as a member or leader.", category: "CoCurricular", pointNumber: 4 },
//     { question: "Ability to deliver ideas effectively in a public forum.", category: "CoCurricular", pointNumber: 5 },
//     { question: "Ability to compete with others in events.", category: "CoCurricular", pointNumber: 6 }
// ];

// const extraCurricularQuestions = [
//     { question: "Ability to organize events as a leader or volunteer.", category: "ExtraCurricular", pointNumber: 1 },
//     { question: "Ability to expose talent as a group or individual in state-level, national-level, or international-level events.", category: "ExtraCurricular", pointNumber: 2 },
//     { question: "Ability to participate in events which lead way to participate in next higher-level events.", category: "ExtraCurricular", pointNumber: 3 },
//     { question: "Ability to continue and gain expertise in the field of your interest.", category: "ExtraCurricular", pointNumber: 4 }
// ];









// const departmentSpecificQuestions = [
//     // Biomedical
//     { question: "To focus on healthcare engineering that includes the study and understanding of biological systems.", category: "DepartmentSpecific", department: "Biomedical" },
//     { question: "To emphasize quantitative analysis and directly tying concepts with healthcare and diagnostics.", category: "DepartmentSpecific", department: "Biomedical" },
//     { question: "Practice professionally as biomedical engineers and/or biomedical scientists in the field of health care sector for the wellbeing of humankind.", category: "DepartmentSpecific", department: "Biomedical" },
//     { question: "Build careers addressing human health problems within a multidisciplinary, global industry.", category: "DepartmentSpecific", department: "Biomedical" },

//     // Biotechnology
//     { question: "To maintain high standards of teaching through innovative pedagogy for enabling students to be lifelong learners and globally competent professionals.", category: "DepartmentSpecific", department: "Biotechnology" },
//     { question: "To foster creativity through innovation-based research activities for upliftment of self and society promoting socio-economic growth.", category: "DepartmentSpecific", department: "Biotechnology" },
//     { question: "To inculcate professional ethics and skills amongst the graduates and empowering them to have career advancement through placements, higher studies, and entrepreneurs.", category: "DepartmentSpecific", department: "Biotechnology" },

//     // Aeronautical Engineering
//     { question: "Utilize the knowledge of Aeronautical engineering in innovative, dynamic and challenging environment for design and development of new products.", category: "DepartmentSpecific", department: "Aeronautical Engineering" },
//     { question: "Impart professional skills through simulation, language skills and general purpose CAE packages to solve practical problems of components in design and analysis to meet the airworthiness requirements for flight vehicles.", category: "DepartmentSpecific", department: "Aeronautical Engineering" },
//     { question: "Fabricate, test and develop the products with more innovative technologies.", category: "DepartmentSpecific", department: "Aeronautical Engineering" },

//     // Agricultural Engineering
//     { question: "Model, design and analyze agricultural machineries and implement to increase productivity, improve land use and conserve resources like seed, water, fertilizer, pesticide, and fuel.", category: "DepartmentSpecific", department: "Agricultural Engineering" },
//     { question: "To improvise better ways to minimize the crop loss from field damage during postharvest management and energy utilization, sorting, processing and packaging.", category: "DepartmentSpecific", department: "Agricultural Engineering" },

//     // Artificial Intelligence and Data Science
//     { question: "Ability to design and develop Artificial Intelligence algorithms, tools and techniques for solving real-world problems.", category: "DepartmentSpecific", department: "Artificial Intelligence and Datascience" },
//     { question: "Ability to identify and use appropriate analytical tools and techniques on massive datasets to extract information.", category: "DepartmentSpecific", department: "Artificial Intelligence and Datascience" },

//     // Artificial Intelligence and Machine Learning
//     { question: "Develop models in Data Science, Machine Learning, deep learning and Big Data technologies, using AI and modern tools.", category: "DepartmentSpecific", department: "Artificial Intelligence and Machine Learning" },
//     { question: "Formulate solutions for interdisciplinary AI problems through acquired programming knowledge in the respective domains fulfilling real-time constraints.", category: "DepartmentSpecific", department: "Artificial Intelligence and Machine Learning" },

//     // Automobile
//     { question: "An ability to design, analyze and find the solutions for automotive related problems.", category: "DepartmentSpecific", department: "Automobile" },
//     { question: "An ability to use computer knowledge, IT for designing and improving the performance of automobiles.", category: "DepartmentSpecific", department: "Automobile" },

//     // Civil
//     { question: "Apply technical skills and modern engineering tools with critical thinking and innovations for solving civil engineering problems.", category: "DepartmentSpecific", department: "Civil" },
//     { question: "Design sustainable and smart infrastructure in the context of environmental, economic, and societal requirements and serve the community as ethical and responsible professionals.", category: "DepartmentSpecific", department: "Civil" },

//     // Computer Science and Business Systems
//     { question: "To demonstrate the technical knowledge in Computer Science with equal appreciation of humanities, management sciences, and human values.", category: "DepartmentSpecific", department: "Computer Science and Business Systems" },
//     { question: "To create, select, and apply appropriate techniques, resources, modern engineering, and business tools including prediction and data analytics to complex engineering activities and business solutions.", category: "DepartmentSpecific", department: "Computer Science and Business Systems" },

//     // Computer Science and Design
//     { question: "Apply the skill of design and creative thinking to provide digital solutions to modern and complex engineering problems.", category: "DepartmentSpecific", department: "Computer Science and Design" },
//     { question: "Apply the power of computing and digital media tools to provide solutions to challenging interactive technologies.", category: "DepartmentSpecific", department: "Computer Science and Design" },
//     { question: "Acquire knowledge in diverse areas of Computer Science and Design to promote skills essential for career, entrepreneurship, and higher studies.", category: "DepartmentSpecific", department: "Computer Science and Design" },

//     // Computer Science and Engineering
//     { question: "Apply suitable algorithmic thinking and data management practices to design, develop, and evaluate effective solutions for real-life and research problems.", category: "DepartmentSpecific", department: "Computer Science and Engineering" },
//     { question: "Design and develop cost-effective solutions based on cutting-edge hardware and software tools and techniques to meet global requirements.", category: "DepartmentSpecific", department: "Computer Science and Engineering" },

//     // Computer Technology
//     { question: "Demonstrate the knowledge and technical skills in software development.", category: "DepartmentSpecific", department: "Computer Technology" },
//     { question: "Develop practical competencies in Software and Hardware Design.", category: "DepartmentSpecific", department: "Computer Technology" },

//     // Electrical and Electronics Engineering
//     { question: "Modeling, design, and analysis of Electrical & Electronic Systems using design principles and software tools.", category: "DepartmentSpecific", department: "Electrical and Electronics Engineering" },
//     { question: "Develop electrical machinery/Appliances for various domestic and industrial needs.", category: "DepartmentSpecific", department: "Electrical and Electronics Engineering" },

//     // Electronics and Communication Engineering
//     { question: "Able to apply the concepts of Electronics, Communication, Signal processing, and VLSI in the design and implementation of application-oriented engineering systems.", category: "DepartmentSpecific", department: "Electronics and Communication Engineering" },
//     { question: "Able to solve complex engineering problems using state-of-the-art hardware and software tools, along with analytical and managerial skills to arrive at appropriate solutions.", category: "DepartmentSpecific", department: "Electronics and Communication Engineering" },

//     // Electronics and Instrumentation Engineering
//     { question: "Identify suitable sensors and design signal conditioning circuits to measure physical parameters for industrial applications.", category: "DepartmentSpecific", department: "Electronics and Instrumentation Engineering" },
//     { question: "Design, develop, and realize advanced control schemes in different platforms such as microcontroller, PLC, SCADA, DCS, and other modern controllers for next level of automation.", category: "DepartmentSpecific", department: "Electronics and Instrumentation Engineering" },

//     // Fashion Technology
//     { question: "Interpret trends, decipher fashion movements, apply the knowledge of elements of design and Gestalt theory of visual perception, and incorporate sustainable decisions into their design artworks, fashion products, and accessories.", category: "DepartmentSpecific", department: "Fashion Technology" },
//     { question: "Articulate design aesthetics, communicate product values, collaborate across disciplines as member and leader; and envision solutions in fashion systems: design, technology, production, and management.", category: "DepartmentSpecific", department: "Fashion Technology" },

//     // Food Technology
//     { question: "Students will be able to conduct innovative and high-quality research to solve emerging problems in food technology by applying scientific knowledge.", category: "DepartmentSpecific", department: "Food Technology" },
//     { question: "Practical and research training imparted to the students will pave the way for introducing novel technologies in food processing sectors for global sustenance.", category: "DepartmentSpecific", department: "Food Technology" },

//     // Information Science and Engineering
//     { question: "Excel in processing the information using data management with security features.", category: "DepartmentSpecific", department: "Informaation Science and Engineering" },
//     { question: "Demonstrate and develop applications on data analysis.", category: "DepartmentSpecific", department: "Informaation Science and Engineering" },

//     // Information Technology
//     { question: "Design and develop cost-effective, secure, reliable IT, network, and web-based solutions with professional expertise in the domains including banking and healthcare and communications.", category: "DepartmentSpecific", department: "Information Technology" },
//     { question: "Identify and analyze large and heterogeneous data by applying suitable machine and deep learning algorithms and analytical tools to enable information retrieval and decision making in scientific and business applications.", category: "DepartmentSpecific", department: "Information Technology" },

//     // Mechanical Engineering
//     { question: "Design, analyze, and evaluate the performance of mechanical systems.", category: "DepartmentSpecific", department: "Mechanical Engineering" },
//     { question: "Choose the appropriate methodology, materials, tools, and machinery to manufacture quality products at affordable cost.", category: "DepartmentSpecific", department: "Mechanical Engineering" },
//     { question: "Address all the fluid flow and energy transfer related problems of mechanical systems.", category: "DepartmentSpecific", department: "Mechanical Engineering" },

//     // Mechatronics Engineering
//     { question: "Analyze, design, and develop electromechanical systems using contemporary tools.", category: "DepartmentSpecific", department: "Mechatronics Engineering" },
//     { question: "Select sensors and controllers to develop and implement automation techniques for solving real-world interdisciplinary engineering problems.", category: "DepartmentSpecific", department: "Mechatronics Engineering" },
// ];







// const parentQuestions = [
//     {
//         pointNumber: 1,
//         question: "Interaction with the Department"
//     },
//     {
//         pointNumber: 2,
//         question: "Improvement in technical knowledge, soft skills, ethics and morality"
//     },
//     {
//         pointNumber: 3,
//         question: "Faculty members, technical and non-technical staff members are cooperative"
//     },
//     {
//         pointNumber: 4,
//         question: "Counseling and guidance"
//     },
//     {
//         pointNumber: 5,
//         question: "Class room and Laboratory facilities"
//     },
//     {
//         pointNumber: 6,
//         question: "ICT facilities"
//     },
//     {
//         pointNumber: 7,
//         question: "Learning center facilities"
//     },
//     {
//         pointNumber: 8,
//         question: "Transport facilities"
//     },
//     {
//         pointNumber: 9,
//         question: "Hostel, Mess & Cafeteria facilities"
//     }
// ];