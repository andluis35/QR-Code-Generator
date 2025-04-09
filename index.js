import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Insert the URL: ",
            name: "URL"
        }
    ])
    .then((answer) => {
        const url = answer.URL;
        let qr_code = qr.image(url)
        qr_code.pipe(fs.createWriteStream("qr_image.png"))
    });