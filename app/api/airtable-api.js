import axios from "axios";
// import nodemailer from "nodemailer";

export async function postTask(email, subject, message) {
  try {
    const res = await axios.post(
      "https://api.airtable.com/v0/app0ViPjpHLafEGDz/Table%201",
      {
        fields: {
          id: Math.floor(Math.random() * 100),
          email: email,
          subject: subject,
          message: message, // Corrected the variable name here
        },
      },
      {
        headers: {
          Authorization:
            "Bearer patNs4dnuMLpcqHit.ededbebe439201cb49dca78b9f079c49e538eb887cff48b5fbce38568fe33dd6",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("task is posted to airtable", res.data); 
    // await sendEmail(email, subject, message)
    return { data: res.data };
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
// data from airtable to email

// export async function sendEmail() {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "contactayushsharma@gmail.com",
//         pass: "sharmaayush1",
//       },
//     });
// const mailOptions = {
//       from: "your.email@example.com",
//       to: email,
//       subject: subject,
//       text: message,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// }

export async function catchFile() {
  try {
    const result = await axios.get("https://api.airtable.com/v0/app0ViPjpHLafEGDz/Table%202?maxRecords=3&view=Grid%20view",
    {
      headers: {
        Authorization:
          "Bearer patNs4dnuMLpcqHit.ededbebe439201cb49dca78b9f079c49e538eb887cff48b5fbce38568fe33dd6",
        "Content-Type": "application/json",
      },
    });
    console.log("task is got from airtable", result.data); 

    const fileURLs = result.data.records.map(record => {
      return record.fields.files; n
    });

    console.log("task is got from airtable as a link", fileURLs); 
    return { data: fileURLs};
  } catch (error) {
    console.error("Error fetching file URLs from Airtable:", error);
    return { error: error.message };
  }
}

// project list

export async function getProjects() {
  try{
    const result = await axios.get("https://api.airtable.com/v0/appuxSGaVeck8emud/Table%201",
    {
      headers: {
        Authorization:
          "Bearer pat65cSZbjKDRmwQf.9ae63ecb2d264b2edc1670506be70b2fb51ea2ef14d800590a15dbef99ab7d96",
        "Content-Type": "application/json",
      },
    });
    console.log("task is got from airtable", result.data); 
    return {data: result.data}

    // console.log("task is got from airtable as a link", projects);
  }
  catch (error) {
    console.error("Error fetching file URLs from Airtable:", error);
    return { error: error.message };
  }
}