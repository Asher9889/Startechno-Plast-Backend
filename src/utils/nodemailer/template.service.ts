import fs from "fs";
import path from "path";

// export class TemplateService {
//   static render(templateName: string, variables: Record<string, any>) {
//     const templatePath = path.join(__dirname, `../templates/${templateName}.html`);

//     let html = fs.readFileSync(templatePath, "utf-8");

//     // Replace {{key}} dynamically
//     Object.keys(variables).forEach((key) => {
//       const regex = new RegExp(`{{${key}}}`, "g");
//       html = html.replace(regex, variables[key] ?? "");
//     });

//     return html;
//   }
// }



export class TemplateService {
    static render(templateName: string, variables: Record<string, any>) {
        const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
        let html = fs.readFileSync(templatePath, "utf-8");

        // Generate dynamic rows
        const dynamicFields = Object.entries(variables)
            .map(([key, value]) => {
                return `
                    <p style="font-size:15px; color:#1E293B; margin:6px 0;">
                        <strong>${this.formatKey(key)}:</strong> ${value || "N/A"}
                    </p>
                `;
            })
            .join("\n");

        // Inject dynamic fields
        html = html.replace("{{dynamicFields}}", dynamicFields);
        html = html.replace("{{name}}", variables.name);

        return html;
    }

    private static formatKey(key: string) {
        return key
            .replace(/([A-Z])/g, " $1")    // camelCase → camel Case
            .replace(/^./, (str) => str.toUpperCase()); // capitalize
    }
}
